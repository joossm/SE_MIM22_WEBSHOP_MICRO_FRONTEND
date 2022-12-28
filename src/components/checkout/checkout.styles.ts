import Link from 'next/link'
import styled from 'styled-components'

export const CheckoutStyled = styled.div`
  background-color: white;
  padding: 20px;
  padding-top: 5px;
`

export const LinkStyled = styled(Link)`
  color: rgb(52, 120, 255);

  :hover {
    color: rgba(52, 120, 255, 0.5);
  }
`
