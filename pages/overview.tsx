import { observer } from 'mobx-react-lite'

import { BookList } from '../src/components/book-list/book-list'
import { dummies } from '../src/components/book/book.dummies'
import { Navigation } from '../src/components/navigation/navigation'

function Overview() {
  return (
    <>
      <BookList books={dummies} />
    </>
  )
}

export default observer(Overview)
