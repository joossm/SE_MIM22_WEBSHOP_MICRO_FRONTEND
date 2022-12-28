import { useState } from 'react'

import userStore from '../../stores/user/user-store'

import { LoginField } from './login-form.styles'

export const LoginForm = () => {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')

  return (
    <>
      <h2>Login</h2>
      <LoginField>
        <input
          placeholder="User Name"
          value={userName}
          onChange={e => setUserName(e.target.value)}
        />
        <input
          placeholder="Password"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </LoginField>
      <button
        disabled={userName === '' || password === ''}
        onClick={() => {
          userStore.login(userName, password)
        }}
      >
        Login
      </button>
    </>
  )
}
