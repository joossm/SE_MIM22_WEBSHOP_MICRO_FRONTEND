import { useState } from 'react'

import { LoginForm } from '../login-form/login-form'
import { RegisterForm } from '../register-form/register-form'

import {
  LoginModalStyled,
  RegisterButton,
  RegisterText,
} from './login-modal.styles'

export const LoginModal = () => {
  const [register, setRegister] = useState(false)

  return (
    <LoginModalStyled>
      {!register ? <LoginForm /> : <RegisterForm />}
      <RegisterText>
        Or
        <RegisterButton
          onClick={() => {
            setRegister(!register)
          }}
        >
          {register ? 'login' : 'create'}
        </RegisterButton>
        {!register && 'an Account '}instead
      </RegisterText>
    </LoginModalStyled>
  )
}
