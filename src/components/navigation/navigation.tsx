import { observer } from 'mobx-react'
import Link from 'next/link'
import basketStore from '../../stores/basket/basket-store'
import { NavBar, NavItem } from './navigation.styles'

export const Navigation = observer(() => {
  return (
    <NavBar>
      <NavItem href="/" active>
        Home
      </NavItem>
      <NavItem href="/basket" active={false}>
        {basketStore.numberOfBooks()} Basket
      </NavItem>
    </NavBar>
  )
})
