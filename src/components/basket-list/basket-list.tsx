import { observer } from 'mobx-react-lite'
import { useRouter } from 'next/router'

import basketStore from '../../stores/basket/basket-store'

import {
  BasketEntry,
  BasketEntryInfo,
  BasketListStyled,
  BuyButton,
  HeaderStyled,
} from './basket-list.styles'

export const BasketList = observer(() => {
  const router = useRouter()

  return (
    <BasketListStyled>
      {!basketStore.isEmpty ? (
        <>
          <HeaderStyled>
            <span>Title</span>
            <span>Amount</span>
            <span>Price</span>
          </HeaderStyled>
          {basketStore.basket &&
            basketStore.basket.books &&
            basketStore.basket?.books.map(basketEntry => {
              return (
                <BasketEntry>
                  <BasketEntryInfo>
                    <strong>{basketEntry.book.title}</strong>
                    EAN: {basketEntry.book.ean}
                  </BasketEntryInfo>
                  <BasketEntryInfo>{basketEntry.amount}</BasketEntryInfo>
                  <BasketEntryInfo>
                    {parseInt(basketEntry.amount) * basketEntry.book.price}€
                  </BasketEntryInfo>
                </BasketEntry>
              )
            })}

          <BuyButton
            onClick={() => {
              basketStore.purchaseBooks()

              router.push('/basket/success')
            }}
          >
            Buy for {basketStore.basketAmount.toFixed(2)}€
          </BuyButton>
        </>
      ) : (
        <BasketEntry>Your basket is empty.</BasketEntry>
      )}
    </BasketListStyled>
  )
})
