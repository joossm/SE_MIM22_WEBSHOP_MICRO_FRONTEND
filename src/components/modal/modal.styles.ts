import styled from 'styled-components'

export const ModalStyled = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
`

export const ModalContentStyled = styled.div`
  background-color: white;
  padding: 10px 30px 30px 30px;
`

export const ModalInfoStyled = styled.p`
  width: 90%;
`

export const ButtonRowStyled = styled.div`
  display: flex;
  justify-content: flex-end;
  column-gap: 10px;
`
