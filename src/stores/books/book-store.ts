import { makeObservable, observable } from 'mobx'

import { getAllBooks } from '../../api/books/get-all-books'
import { getBookById } from '../../api/books/get-single-book'
import { BookT } from '../../components/book/book.types'
import { mapBook, mapBooks } from './book-store.helper'

class BookStore {
  books: BookT[] = []

  constructor() {
    makeObservable(this, {
      books: observable,
    })
  }

  async getBooks(): Promise<void> {
    try {
      const books = await getAllBooks()
      if (books) {
        this.books = mapBooks(books)
      }
    } catch (error) {
      console.log('>>> Error in getAllBooks ', error)
    }
  }

  async getSingleBook(id: string): Promise<BookT | null> {
    try {
      const books = await getBookById(id)

      if (books) {
        const mappedBooks = mapBook(books)

        return mappedBooks
      }
      return null
    } catch (error) {
      console.log('>>> Error in getBookById ', error)
      return null
    }
  }
}

const bookStore = new BookStore()

export default bookStore
