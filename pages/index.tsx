import { observer } from 'mobx-react-lite'

import userStore from '../src/stores/user/user-store'
import Login from './login'
import Overview from './overview'

function Home() {
  return <>{userStore.isLoggedIn ? <Overview /> : <Login />}</>
}

export default observer(Home)
