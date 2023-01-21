import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'

import { BookList } from '../src/components/book-list/book-list'
import bookStore from '../src/stores/books/book-store'

function Overview() {
  useEffect(() => {
    bookStore.getBooks()
  }, [])

  return (
    <>
      {bookStore.books.length > 0 ? (
        <BookList books={bookStore.books} />
      ) : (
        <p style={{ backgroundColor: 'white', padding: '20px' }}>Loading...</p>
      )}
    </>
  )
}

export default observer(Overview)
