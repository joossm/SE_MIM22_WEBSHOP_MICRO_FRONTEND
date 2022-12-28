import { observer } from 'mobx-react-lite'

import userStore from '../src/stores/user/user-store'
import Login from './login'
import Overview from './overview'

function Home() {
  return (
    <>
      <h1>Book Store</h1>
      {userStore.isLoggedIn ? <Overview /> : <Login />}
    </>
  )
}

export default observer(Home)
