import { observer } from 'mobx-react-lite'
import { useState } from 'react'

import { BasketIcon } from '../../../public/icons/basket-icon'

import basketStore from '../../stores/basket/basket-store'
import userStore from '../../stores/user/user-store'

import Modal from '../modal/modal'

import {
  BasketButton,
  BookStyled,
  LinkStyled,
  PriceStyled,
} from './book.styles'
import { BookProps } from './book.types'

export const Book = observer(({ book }: BookProps) => {
  const [openModal, setOpenModal] = useState(false)

  return (
    <>
      <Modal
        title={`Add "${book.title}"?`}
        content="Do you want to add this book to your basket?"
        customCallBack={() =>
          basketStore.addToBasket(book.id, userStore.user!.id, '1')
        }
        setShow={setOpenModal}
        show={openModal}
        submitButtonTitle="Yes"
      />
      <BookStyled>
        <LinkStyled
          href={{
            pathname: '/product-detail',
            query: { id: book.id, ean: book.ean },
          }}
        >
          <strong>{book.title}</strong>
          <PriceStyled>Price {book.price}€</PriceStyled>
        </LinkStyled>
        <BasketButton
          onClick={() => {
            setOpenModal(true)
          }}
        >
          <BasketIcon />
        </BasketButton>
      </BookStyled>
    </>
  )
})
