import { BookFromBackend, BookT } from '../../components/book/book.types'
import { BasketFromBackend, BasketT } from './basket-store.types'

export function mapBook(book: BookT): BookFromBackend {
  return {
    Id: book.id,
    Titel: book.title,
    EAN: book.ean,
    Price: book.price,
    Content: book.content,
  }
}

export function mapBackendBook(book: BookFromBackend): BookT {
  return {
    id: book.Id,
    title: book.Titel,
    ean: book.EAN,
    price: book.Price,
    content: book.Content,
  }
}

export function mapBasket(basket: BasketFromBackend[]): BasketT {
  let books: { book: BookT; amount: string }[] = []

  basket.forEach(entry => {
    entry.Books.forEach(book => {
      books.push({
        amount: book.Amount,
        book: mapBackendBook(book.Book),
      })
    })
  })

  const mappedBasket = {
    basketId: basket[0].BasketID,
    books: books,
    userId: basket[0].UserID,
  }

  return mappedBasket
}
