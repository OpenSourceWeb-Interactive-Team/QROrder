import { useRef, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { BiShoppingBag } from 'react-icons/bi'
import StyledBasketButton from './style'

function BasketButton() {
  const products = useSelector(state => state.basket.product.filter(product => product.quantity > 0))
  const button = useRef()

  const total = products.reduce((bfr, cur) => {
    return bfr + cur.quantity
  }, 0)

  useEffect(() => {
    if (total === 0) return
    const plus = document.createElement('div')
    plus.classList.add('add')
    plus.textContent = '+1'
    button.current.appendChild(plus)
  }, [products])

  return (
    <StyledBasketButton ref={button}>
      <div className="count">{total}</div>
      <BiShoppingBag className="icon" />
    </StyledBasketButton>
  )
}

export default BasketButton
