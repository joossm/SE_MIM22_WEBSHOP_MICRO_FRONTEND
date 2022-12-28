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
