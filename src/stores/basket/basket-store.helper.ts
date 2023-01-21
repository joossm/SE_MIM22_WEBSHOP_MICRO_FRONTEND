import { BookFromBackend, BookT } from '../../components/book/book.types'

export function mapBook(book: BookT): BookFromBackend {
  return {
    Id: book.id,
    Titel: book.title,
    EAN: book.ean,
    Price: book.price,
    Content: book.content,
  }
}
