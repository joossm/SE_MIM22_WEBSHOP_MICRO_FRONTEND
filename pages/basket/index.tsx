import { observer } from 'mobx-react-lite'
import { BasketList } from '../../src/components/basket-list/basket-list'

function Basket() {
  return (
    <>
      <h2>Basket</h2>
      <BasketList />
    </>
  )
}

export default observer(Basket)
