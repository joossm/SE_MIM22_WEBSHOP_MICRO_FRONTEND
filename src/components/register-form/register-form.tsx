import { Formik, Field } from 'formik'

import userStore from '../../stores/user/user-store'

import { FormStyled, Row, ButtonStyled } from './register-form.styles'

export const RegisterForm = () => {
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
          userStore.login(values.userName, values.password)
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

          <ButtonStyled type="submit">Register</ButtonStyled>
        </FormStyled>
      </Formik>
    </>
  )
}
