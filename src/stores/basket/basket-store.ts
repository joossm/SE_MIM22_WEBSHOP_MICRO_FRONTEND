import { computed, makeObservable, observable } from 'mobx'
import { getOrdersByUser } from '../../api/basket/get-orders-by-user'
import { placeOrder } from '../../api/basket/place-order'

import { BookT } from '../../components/book/book.types'

import { BasketT } from './basket-store.types'

class BasketStore {
  basket?: BasketT

  constructor() {
    makeObservable(this, {
      basket: observable,
      isEmpty: computed,
      basketAmount: computed,
      numberOfBooks: computed,
    })
    this.basket = {
      basketId: 1,
      books: [],
      customerId: 1,
    }
  }

  get isEmpty(): boolean {
    return this.basket === undefined || this.basket?.books === undefined
  }

  get basketAmount(): number {
    let price = 0
    if (this.basket?.books) {
      this.basket?.books.forEach(entry => {
        price += entry.amount * entry.book.price
      })
    }

    return price
  }

  get numberOfBooks(): number {
    let amount = 0
    if (this.basket && this.basket.books) {
      this.basket?.books.forEach(book => {
        amount += book.amount
      })
    }

    return amount
  }

  purchaseBooks(): void {
    // Won't do

    this.basket = undefined
  }

  async addToBasket(
    productId: string,
    userId: string,
    amount: string
  ): Promise<boolean> {
    try {
      const result = await placeOrder(productId, userId, amount)
      if (result === 'true') {
        return true
      }
      return false
    } catch (error) {
      console.log('>>> Error in addToBasket ', error)
      return false
    }
  }

  async getBasket(userId: string): Promise<void> {
    try {
      const basketFromBackend = await getOrdersByUser(userId)

      if (basketFromBackend) {
        this.basket = basketFromBackend
      }
    } catch (error) {
      console.log('>>> Error in getBasket ', error)
    }
  }
}

const basketStore = new BasketStore()

export default basketStore
