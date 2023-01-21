import { observer } from 'mobx-react-lite'
import type { AppProps } from 'next/app'
import axios from 'axios'

import '../styles/globals.css'
import { Navigation } from '../src/components/navigation/navigation'
import userStore from '../src/stores/user/user-store'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  useEffect(() => {
    if (!userStore.isLoggedIn) {
      router.push('/login')
    }
  }, [userStore.isLoggedIn])

  return (
    <>
      <h1>Book Store</h1>
      {userStore.isLoggedIn && <Navigation />}
      <Component {...pageProps} />
    </>
  )
}

export default observer(App)
