import { renderBlock } from './lib.js'

export function renderUserBlock (name:string, avatar:string, favoriteItemsAmount?:number): void {
  //const favoritesCaption = favoriteItemsAmount ? favoriteItemsAmount : 'ничего нет'
  //const hasFavoriteItems = favoriteItemsAmount > 0 ? true : false
  const favoritesCaption = (localStorage.favoriteItemsAmount > 0) ? localStorage.favoriteItemsAmount : 'ничего нет'
  const hasFavoriteItems = localStorage.favoriteItemsAmount > 0 ? true : false

  class User {
    name: string
    avatar: string
    favoriteItemsAmount: number

    constructor (name:string, avatar:string, favoriteItemsAmount:number) {
    this.name = name
    this.avatar = avatar
    this.favoriteItemsAmount = favoriteItemsAmount
    }
}

  const users = [ new User('Tommy Brown', 'avatar1', 1),
                  new User('Alfred Hitchcock', 'avatar2', 2),
                  new User('Wade Warren', 'avatar', 0) ]
 
  renderBlock(
    'user-block',
    `
    <div class="header-container">
      <img class="avatar" src="/img/${localStorage.avatar}.png" alt="Tom Cruise" />
      <div class="info">
          <p class="name">${localStorage.name}</p>
          <p class="fav">
            <i class="heart-icon${hasFavoriteItems ? ' active' : ''}"></i>${favoritesCaption}
          </p>
      </div>
    </div>
    `
  )
}


