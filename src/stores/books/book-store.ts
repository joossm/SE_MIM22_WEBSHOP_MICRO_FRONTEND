import {makeObservable, observable} from 'mobx'

import {dummies} from '../../components/book/book.dummies'
import {BookT} from '../../components/book/book.types'

class BookStore {
    books: BookT[] = []

    constructor() {
        makeObservable(this, {
            books: observable,
        })
        this.books = dummies
    }
}
