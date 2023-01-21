import { useRouter } from 'next/router'
import { KeyboardEvent, useState } from 'react'

import userStore from '../../stores/user/user-store'

import { ErrorStyled, LoginField } from './login-form.styles'

export const LoginForm = () => {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()

  async function login(e: KeyboardEvent<HTMLInputElement>): Promise<void> {
    if (e.key === 'Enter') {
      if (userName !== '' && password !== '') {
        console.log('Here')

        const loginResp = await userStore.login(userName, password)
        console.log('loginResp', loginResp)
        if (loginResp) {
          router.push('/')
        } else {
          setError('Login credentials are incorrect')
        }
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
        {error && (
          <ErrorStyled style={{ color: 'red', fontSize: '14px' }}>
            {error}
          </ErrorStyled>
        )}
      </LoginField>
      <button
        disabled={userName === '' || password === ''}
        onClick={async () => {
          await userStore.login(userName, password)
        }}
      >
        Login
      </button>
    </>
  )
}
