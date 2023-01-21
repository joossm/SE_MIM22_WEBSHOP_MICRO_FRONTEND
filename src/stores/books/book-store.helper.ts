import { BookFromBackend, BookT } from '../../components/book/book.types'

export function mapBooks(books: BookFromBackend[]): BookT[] {
  return books.map((book: BookFromBackend) => {
    return {
      id: book.Id,
      title: book.Titel,
      ean: book.EAN,
      price: book.Price,
      content: book.Content,
    }
  })
}

export function mapBook(book: BookFromBackend): BookT {
  return {
    id: book.Id,
    title: book.Titel,
    ean: book.EAN,
    price: book.Price,
    content: book.Content,
  }
}
