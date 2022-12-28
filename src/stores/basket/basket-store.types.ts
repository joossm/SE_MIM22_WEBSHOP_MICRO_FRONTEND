import { BookT } from '../../components/book/book.types'

export interface BasketT {
  basketId: number
  books: BookT[]
  customerId: number
}
