import {computed, makeObservable, observable} from 'mobx'

import {BookT} from '../../components/book/book.types'

import {BasketT} from './basket-store.types'

class BasketStore {
    basket?: BasketT = {
        basketId: 1,
        books: [],
        customerId: 1,
    }

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
        return this.basket === undefined || this.basket?.books.length === 0
    }

    get basketAmount(): number {
        let price = 0
        this.basket?.books.forEach(entry => {
            price += entry.amount * entry.book.price
        })

        return price
    }

    get numberOfBooks(): number {
        let amount = 0
        this.basket?.books.forEach(book => {
            amount += book.amount
        })
        return amount
    }

    purchaseBooks(): void {
        // TODO call endpoint

        this.basket = undefined
    }

    addToBasket(book: BookT): void {
        if (this.basket) {
            const addedBook = this.basket?.books.find(
                basketEntry => basketEntry.book.id === book.id
            )

            if (addedBook) {
                // TODO call endpoint
                addedBook.amount += 1
                return
            }
        } else {
            // TODO call endpoint
            this.basket = {
                basketId: 2,
                books: [],
                customerId: 1,
            }
        }
        this.basket?.books.push({book: book, amount: 1})
    }
}

const basketStore = new BasketStore()

export default basketStore
