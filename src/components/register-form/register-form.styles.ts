import { Form } from 'formik'
import styled from 'styled-components'

export const FormStyled = styled(Form)`
  display: flex;
  flex-direction: column;
`

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 10px;
  flex-wrap: wrap;
`

export const ButtonStyled = styled.button`
  align-self: center;
`

export const ErrorStyled = styled.p`
  color: red;
  align-self: center;
  font-size: '14px';
`
