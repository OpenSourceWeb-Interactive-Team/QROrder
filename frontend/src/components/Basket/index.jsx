import { useSelector } from 'react-redux'
import { AiOutlineClose } from 'react-icons/ai'

import StyledBasket from './style'
import Product from './Product'
import Selector from './Selector'
function Basket() {
  const totalPrice = useSelector(state => state.basket.price)

  return (
    <StyledBasket>
      <header>
        <p>주문서</p>
        <AiOutlineClose className="close-icon" />
      </header>
      <section>
        <Selector />
        <div className="products">
          <Product title="밥" price={4000} />
          <Product title="국" price={4000} />
          <div className="total-price">
            총 주문금액
            <p>{totalPrice}원</p>
          </div>
        </div>
        <div className="bottom">
          <div className="pay">{totalPrice}원 결제하기</div>
        </div>
      </section>
    </StyledBasket>
  )
}

export default Basket
