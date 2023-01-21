import { observer } from 'mobx-react'
import { useRouter } from 'next/router'

import basketStore from '../../stores/basket/basket-store'
import userStore from '../../stores/user/user-store'

import {
  LoggeedInBadge,
  LogoutButton,
  NavBar,
  NavItem,
} from './navigation.styles'

export const Navigation = observer(() => {
  const router = useRouter()

  return (
    <NavBar>
      <div>
        <NavItem href="/" active={router.pathname === '/'}>
          Home
        </NavItem>
        <NavItem href="/basket" active={router.pathname === '/basket'}>
          Basket ({basketStore.numberOfBooks})
        </NavItem>
      </div>
      <LoggeedInBadge>
        Hello <strong>{userStore.getUserName()}</strong>!
        <LogoutButton
          onClick={() => {
            userStore.logout()
            basketStore.basket = undefined
            router.push('/login')
          }}
        >
          Logout
        </LogoutButton>
      </LoggeedInBadge>
    </NavBar>
  )
})
