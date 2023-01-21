import { Field, Formik } from 'formik'
import { useRouter } from 'next/router'
import { useState } from 'react'

import userStore from '../../stores/user/user-store'

import {
  ButtonStyled,
  ErrorStyled,
  FormStyled,
  Row,
} from './register-form.styles'

export const RegisterForm = () => {
  const [error, setError] = useState('')
  const router = useRouter()
  return (
    <>
      <h3>Register</h3>
      <Formik
        initialValues={{
          userName: '',
          password: '',
          firstName: '',
          lastName: '',
          houseNumber: '',
          street: '',
          zipCode: '',
          city: '',
          email: '',
          phone: '',
        }}
        onSubmit={values => {
          // TODO add register functionality
          userStore.register(values).then(success => {
            if (success) {
              router.push('/')
            } else {
              setError('Error during register')
            }
          })
        }}
      >
        <FormStyled>
          <Row>
            <Field name="firstName" placeholder="First Name" />{' '}
            <Field name="lastName" placeholder="Last Name" />
          </Row>
          <Row>
            <Field name="street" placeholder="Street" />
            <Field name="houseNumber" placeholder="House Number" />
          </Row>
          <Row>
            <Field name="zipCode" placeholder="ZIP Code" />
            <Field name="city" placeholder="City" />
          </Row>
          <Field type="email" name="email" placeholder="E-Mail" />
          <Field name="phone" placeholder="Phone number" />

          <p>Please add login credentials </p>
          <Field name="userName" placeholder="Your username" />
          <Field
            name="password"
            type="password"
            placeholder="Please choose a password"
          />
          {error && <ErrorStyled>{error}</ErrorStyled>}
          <ButtonStyled type="submit">Register</ButtonStyled>
        </FormStyled>
      </Formik>
    </>
  )
}
