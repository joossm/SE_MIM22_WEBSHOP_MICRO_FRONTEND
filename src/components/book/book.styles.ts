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

  :hover {
    color: blue;
  }
`

export const BasketButton = styled.button`
  margin-top: auto;
`

export const PriceStyled = styled.p`
  justify-self: flex-end;
  margin-top: auto;
  font-size: 14px;
`
