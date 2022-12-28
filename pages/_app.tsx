import { observer } from 'mobx-react-lite'
import type { AppProps } from 'next/app'

import '../styles/globals.css'
import { Navigation } from '../src/components/navigation/navigation'
import userStore from '../src/stores/user/user-store'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <h1>Book Store</h1>
      {userStore.isLoggedIn && <Navigation />}
      <Component {...pageProps} />
    </>
  )
}

export default observer(App)
