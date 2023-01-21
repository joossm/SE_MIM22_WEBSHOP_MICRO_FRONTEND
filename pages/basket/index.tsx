import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'
import { BasketList } from '../../src/components/basket-list/basket-list'
import basketStore from '../../src/stores/basket/basket-store'
import { BasketT } from '../../src/stores/basket/basket-store.types'
import userStore from '../../src/stores/user/user-store'

function Index() {
  useEffect(() => {
    basketStore.getBasket(userStore.user!.id)
  }, [])
  return (
    <>
      <h2>Basket</h2>
      <BasketList />
    </>
  )
}

export default observer(Index)
