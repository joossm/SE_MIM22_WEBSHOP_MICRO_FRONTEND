import { observer } from 'mobx-react-lite'

import basketStore from '../../stores/basket/basket-store'

import {
  BasketButton,
  BookStyled,
  LinkStyled,
  PriceStyled,
} from './book.styles'
import { BookProps } from './book.types'

export const Book = observer(({ book }: BookProps) => {
  return (
    <BookStyled>
      <LinkStyled href="/product-detail">
        <strong>{book.title}</strong>
        <PriceStyled>Price {book.price}€</PriceStyled>
      </LinkStyled>
      <BasketButton
        onClick={() => {
          basketStore.addToBasket(book)
        }}
      >
        Add To Basket
      </BasketButton>
    </BookStyled>
  )
})
