import { BookFromBackend, BookT } from '../../components/book/book.types'

export interface BasketT {
  basketId: string
  books: { book: BookT; amount: string }[]
  userId: string
}

export interface BasketFromBackend {
  BasketID: string
  Books: { Book: BookFromBackend; Amount: string }[]
  UserID: string
}
