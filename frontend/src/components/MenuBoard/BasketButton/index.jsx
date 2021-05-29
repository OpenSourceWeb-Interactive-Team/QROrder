import StyledBasketButton from './style'
import { BiShoppingBag } from 'react-icons/bi'

function BasketButton() {
  return (
    <StyledBasketButton>
      <BiShoppingBag className="icon" />
    </StyledBasketButton>
  )
}

export default BasketButton
