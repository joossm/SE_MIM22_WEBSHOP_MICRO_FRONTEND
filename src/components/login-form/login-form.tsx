import { useRouter } from 'next/router'
import { KeyboardEvent, useState } from 'react'

import userStore from '../../stores/user/user-store'

import { LoginField } from './login-form.styles'

export const LoginForm = () => {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()

  function login(e: KeyboardEvent<HTMLInputElement>): void {
    if (e.key === 'Enter') {
      if (userName !== '' && password !== '') {
        userStore.login(userName, password)
        router.push('/')
      }
    }
  }

  return (
    <>
      <h3>Login</h3>
      <LoginField>
        <input
          placeholder="User Name"
          value={userName}
          onChange={e => setUserName(e.target.value)}
          onKeyDown={login}
        />
        <input
          placeholder="Password"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          onKeyDown={login}
        />
      </LoginField>
      <button
        disabled={userName === '' || password === ''}
        onClick={() => {
          userStore.login(userName, password)
          router.push('/')
        }}
      >
        Login
      </button>
    </>
  )
}
