import {Book} from '../book/book'

import {BookListT} from './book-list.types'
import {BookListStyled} from './book-list.styles'

export const BookList = ({books}: BookListT) => {
    return (
        <>
            <h2>Overview</h2>
            <BookListStyled>
                {books.map(book => {
                    return <Book key={book.id} book={book}/>
                })}
            </BookListStyled>
        </>
    )
}
