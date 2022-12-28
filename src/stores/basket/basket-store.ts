import { computed, makeObservable, observable } from 'mobx'

import { BookT } from '../../components/book/book.types'
import userStore from '../user/user-store'

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
      isEmpty: computed,
    })
    this.basket = {
      basketId: 1,
      books: [],
      customerId: 1,
    }
  }

  addToBasket(book: BookT): void {
    console.log(book, this.basket.books)
    const addedBook = this.basket.books.find(
      basketEntry => basketEntry.book === book
    )

    if (addedBook) {
      addedBook.amount += 1
      console.log(this.basket.books)
    } else {
      this.basket?.books.push({ book: book, amount: 1 })
    }
  }

  numberOfBooks = (): number => {
    let amount = 0
    this.basket.books.forEach(book => {
      amount += book.amount
    })
    console.log(amount)
    return amount
  }

  get isEmpty(): boolean {
    return this.basket.books.length === 0
  }
}

const basketStore = new BasketStore()

export default basketStore
