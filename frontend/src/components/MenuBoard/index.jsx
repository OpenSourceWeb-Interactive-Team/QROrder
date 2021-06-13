import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import Menu from './Menu'
import Store from './Store'
import Chart from './chart'
import Carousell from './carousel'
import StyledMenuBoard from './style'
import BasketButton from './BasketButton'
import useStore from '../../hooks/useStore'

function MenuBoard() {
  const [quantity, setQuantity] = useState(0)
  const store = useStore(1)
  const products = useSelector(state => state.basket.product)

  useEffect(() => {
    let totalQuantity = 0
    products.map(product => (totalQuantity += product.quantity))
    setQuantity(totalQuantity)
  }, [products])

  console.log(store)

  if (!store) return <></>

  return (
    <StyledMenuBoard>
      <Store />
      <Carousell />
      <Chart />
      {store.menu.map(menuDetail => (
        <Menu key={menuDetail.name} menuDetail={menuDetail}></Menu>
      ))}
      {quantity !== 0 ? (
        <Link to="/basket">
          <BasketButton />
        </Link>
      ) : (
        <BasketButton />
      )}
    </StyledMenuBoard>
  )
}

export default MenuBoard
