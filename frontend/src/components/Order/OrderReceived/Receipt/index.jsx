import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

import StyledReceipt from './style'
import MenuInfo from './menu_info/index'
import { toPriceFormat } from '../../../../utils/format'

export default function Receipt() {
  var num = 0

  const products = useSelector(state => state.basket.product.filter(product => product.quantity > 0))
  const [totalPrice, setTotalPrice] = useState(0)

  useEffect(() => {
    let price = 0
    products.map(product => (price += product.price * product.quantity))
    setTotalPrice(price)
  }, [products])

  return (
    <StyledReceipt>
      <div>
        <div className="ordertitle">
          <p className="title">주문 내역</p>
          <p className="num">No.{20210501 + num++}</p>
        </div>

        <div className="receipt">
          {products.map(product => (
            <MenuInfo product={product} />
          ))}
        </div>
        <div className="tot_price">
          <p className="title1">Total</p>
          <p className="num1">{toPriceFormat(totalPrice)}원</p>
        </div>
      </div>
    </StyledReceipt>
  )
}
