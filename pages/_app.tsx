import { observer } from 'mobx-react-lite'
import type { AppProps } from 'next/app'
import { HydrationProvider, Client } from 'react-hydration-provider'
import { useRouter } from 'next/router'

import '../styles/globals.css'
import { Navigation } from '../src/components/navigation/navigation'

function App({ Component, pageProps }: AppProps) {
  const router = useRouter()

  return (
    <HydrationProvider>
      <Client>
        <h1>Book Store</h1>
        {router.pathname !== '/login' && <Navigation />}
      </Client>

      <Component {...pageProps} />
    </HydrationProvider>
  )
}

export default observer(App)
