import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

import StyledReceipt from './style'
import MenuInfo from './menu_info/index'
import { toPriceFormat } from '../../../../utils/format'

export default function Receipt() {
  var num = 0

  const products = useSelector(state => state.basket.product.filter(product => product.quantity > 0))
  const discount = useSelector(state => state.basket.discount)
  const [totalPrice, setTotalPrice] = useState(0)
  const [discountAmount, setDiscountAmount] = useState(0)

  useEffect(() => {
    let price = 0
    products.map(product => (price += product.price * product.quantity))
    if (discount.type === 'percent') {
      setDiscountAmount(price * (discount.amount / 100))
      setTotalPrice(price - discountAmount)
      return
    } else if (discount.type === 'money') {
      setDiscountAmount(discount.amount)
      setTotalPrice(price - discountAmount)
      return
    }
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
          {discount.amount !== 0 && (
            <div className="discount">
              <p className="title">할인금액</p>
              <p className="amount">{toPriceFormat(discountAmount)}원</p>
            </div>
          )}
        </div>
        <div className="tot_price">
          <p className="title1">Total</p>
          <p className="num1">{toPriceFormat(totalPrice)}원</p>
        </div>
      </div>
    </StyledReceipt>
  )
}
