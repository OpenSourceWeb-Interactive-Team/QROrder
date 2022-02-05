import { useSelector } from 'react-redux'
import StyledOrderReceived from './style'
import DotButton from '../dotbutton'
import OrderProcess from './OrderProcess/index'
import OrderInfo from './OrderInfo/index'
import Receipt from './Receipt/index'

function OrderReceived() {
  const store = useSelector(state => state.basket.store)
  const color = useSelector(state => state.process.color)

  return (
    <StyledOrderReceived bgColor={color}>
      <div className="page">
        <div className="frame">
          <div className="table">
            테이블주문접수
          </div>
          <p className="food">{store.name}</p>
          <DotButton></DotButton>
          <OrderProcess></OrderProcess>
          <OrderInfo></OrderInfo>
          <Receipt></Receipt>
        </div>
      </div>
    </StyledOrderReceived>
  )
}

export default OrderReceived
