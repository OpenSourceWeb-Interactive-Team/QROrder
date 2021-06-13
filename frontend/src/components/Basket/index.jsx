import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import { AiOutlineClose } from 'react-icons/ai'

import StyledBasket from './style'
import Product from './Product'
import Selector from './Selector'
import { toPriceFormat } from '../../utils/format'

function Basket() {
  const [totalPrice, setTotalPrice] = useState(0)
  const products = useSelector(state => state.basket.product.filter(product => product.quantity > 0))
  const history = useHistory()

  useEffect(() => {
    let price = 0
    products.map(product => (price += product.price * product.quantity))
    setTotalPrice(price)
  }, [products])
  return (
    <StyledBasket>
      <header>
        <p>주문서</p>
        <AiOutlineClose className="close-icon" onClick={() => history.goBack()} />
      </header>
      <section>
        <Selector />
        <div className="products">
          {products.map(product => (
            <Product key={product.name} name={product.name} price={product.price} quantity={product.quantity} />
          ))}
          <div className="total-price">
            총 주문금액
            <p>{toPriceFormat(totalPrice)}원</p>
          </div>
        </div>
        <Link to="/payment">
          <div className="bottom">
            <div className="pay">{toPriceFormat(totalPrice)}원 결제하기</div>
          </div>
        </Link>
      </section>
    </StyledBasket>
  )
}

export default Basket
