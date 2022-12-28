import Link from 'next/link'
import styled from 'styled-components'

export const BookStyled = styled.div`
  width: 200px;
  border: 1px solid black;
  border-radius: 10px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  margin-right: 20px;
  text-decoration: none;
  background-color: white;
`

export const LinkStyled = styled(Link)`
  text-decoration: none;
  color: black;
`

export const BasketButton = styled.button``

export const PriceStyled = styled.p`
  justify-self: flex-end;
`
