import { observer } from 'mobx-react-lite'

import basketStore from '../../stores/basket/basket-store'

import {
  BasketEntry,
  BasketListStyled,
  BasketEntryInfo,
  HeaderStyled,
  BuyButton,
} from './basket-list.styles'

export const BasketList = observer(() => {
  return (
    <BasketListStyled>
      {!basketStore.isEmpty ? (
        <>
          <HeaderStyled>
            <span>TITLE</span>
            <span>AMOUNT</span>
            <span>PRICE</span>
          </HeaderStyled>
          {basketStore.basket.books.map(basketEntry => {
            return (
              <BasketEntry>
                <BasketEntryInfo>
                  <strong>{basketEntry.book.title}</strong>
                  EAN: {basketEntry.book.ean}
                </BasketEntryInfo>
                <BasketEntryInfo>{basketEntry.amount}</BasketEntryInfo>
                <BasketEntryInfo>
                  {basketEntry.amount * basketEntry.book.price}
                </BasketEntryInfo>
              </BasketEntry>
            )
          })}
          <BuyButton onClick={() => {}}>Buy</BuyButton>
        </>
      ) : (
        <BasketEntry>Your basket is empty.</BasketEntry>
      )}
    </BasketListStyled>
  )
})
