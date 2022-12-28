import styled from 'styled-components'

export const BasketListStyled = styled.div`
  display: flex;
  flex-direction: column;

  background-color: white;
`

export const BasketEntry = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px 20px;
  font-size: 14px;
`

export const BasketEntryInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
`

export const HeaderStyled = styled.div`
  padding: 20px 20px 10px 20px;
  display: flex;

  span {
    width: 30%;
    font-weight: 500;
  }
`

export const BuyButton = styled.button`
  align-self: flex-end;
  margin: 0 20px 20px 0;
`
