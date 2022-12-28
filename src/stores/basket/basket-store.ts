import { makeObservable, observable } from 'mobx'

import { BookT } from '../../components/book/book.types'

import { BasketT } from './basket-store.types'

class BasketStore {
  basket: BasketT = {
    basketId: 1,
    books: [],
    customerId: 1,
  }

  constructor() {
    makeObservable(this, {
      basket: observable,
    })
    this.basket = {
      basketId: 1,
      books: [],
      customerId: 1,
    }
  }

  addToBasket(book: BookT): void {
    this.basket?.books.push(book)
  }

  numberOfBooks = (): number => this.basket.books.length
}

const basketStore = new BasketStore()

export default basketStore
