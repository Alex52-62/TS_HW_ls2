export function renderBlock (elementId, html) {
  const element = document.getElementById(elementId)
  element.innerHTML = html
}

export function renderToast (message, action) {
  let messageText = ''
  
  if (message != null) {
    messageText = `
      <div id="info-block" class="info-block ${message.type}">
        <p>${message.text}</p>
        <button id="toast-main-action">${action?.name || 'Закрыть'}</button>
      </div>
    `
  }
  
  renderBlock(
    'toast-block',
    messageText
  )

  const button = document.getElementById('toast-main-action')
  if (button != null) {
    button.onclick = function() {
      if (action != null && action.handler != null) {
        action.handler()
      }
      renderToast(null, action)
    }
  }
}

export function getUserData (name: unknown, avatar: unknown) {
  localStorage.getItem('name')
  localStorage.getItem('avatar')
}

export function getFavoritesAmount (favoriteItemsAmount: unknown) {
  localStorage.getItem('favoriteItemsAmount')
}

export interface ISearchFormData {
  maxPrice: string
}

export interface IPlace {
  (place?: string [], error?: Error): void
}

export const callback: IPlace = (place, error) => {
    let choice = Math.round(Math.random())
    place = []
    if  (error == null && place != null && choice == 0) {
      console.log(place)
    } else {
      console.error('Fail')
      throw Error('Error!')
    }
    return Promise.resolve(place)
  }

export function delayedFunc (callback){
  setTimeout(() => callback(),3000)
}

export function search (maxPrice, inDate, outDate, delayedFunc) {
  const btn = document.querySelector('button')
  maxPrice = document.getElementById('max-price')
  inDate = document.getElementById('check-in-date')
  outDate = document.getElementById('check-out-date')
  btn.onclick = function (e) {
    e.preventDefault()
    console.log(maxPrice.value)
    console.log(inDate.value)
    console.log(outDate.value)
  }
}
