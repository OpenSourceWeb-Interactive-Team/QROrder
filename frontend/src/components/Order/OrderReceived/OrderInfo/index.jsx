import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import StyledOrderInfo from './style'
import { toPriceFormat } from '../../../../utils/format'
import moment from 'moment'

export default function OrderInfo() {
  const products = useSelector(state => state.basket.product.filter(product => product.quantity > 0))
  const discount = useSelector(state => state.basket.discount)

  const [totalPrice, setTotalPrice] = useState(0)
  const nowTime = moment().format('YYYY/MM/DD HH시 mm분 주문')

  useEffect(() => {
    let price = 0
    products.map(product => (price += product.price * product.quantity))
    if (discount.type === 'percent') {
      setTotalPrice(Number(price * (1 - discount.amount / 100)))
      return
    } else if (discount.type === 'money') {
      setTotalPrice(price - discount.amount)
      return
    } else {
      setTotalPrice(price)
    }
  }, [products])

  return (
    <StyledOrderInfo>
      <div className="orderinfo">
        <p className="inline">주문시간</p>
        <p className="text">{nowTime}</p>
        <br />
        <br />
        <p className="inline">주문메뉴</p>
        <p className="menu_name">
          {products[0].name}외 {products.length - 1}건
        </p>
        <br />
        <br />
        <p className="inline">결제금액</p>
        <p className="menu_price">{toPriceFormat(totalPrice)}원</p>
        <br />
        <br />
      </div>
    </StyledOrderInfo>
  )
}
