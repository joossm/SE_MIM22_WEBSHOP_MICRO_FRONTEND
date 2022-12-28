import { BookT } from '../../components/book/book.types'

export interface BasketT {
  basketId: number
  books: { book: BookT; amount: number }[]
  customerId: number
}
