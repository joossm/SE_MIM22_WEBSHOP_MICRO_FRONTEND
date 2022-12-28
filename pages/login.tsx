import { observer } from 'mobx-react-lite'

import { LoginModal } from '../src/components/login-modal/login-modal'

function Login() {
  return <LoginModal />
}

export default observer(Login)
