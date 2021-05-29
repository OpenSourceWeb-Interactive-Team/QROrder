import StyledOrderInfo from './style'

export default function OrderInfo() {
  return (
    <StyledOrderInfo>
      <div className="orderinfo">
        <p className="inline">주문시간</p>
        <p className="text">2021/05/22/12/38 주문</p>
        <br />
        <br />
        <p className="inline">주문메뉴</p>
        <p className="menu_name">지지고 반반</p>
        <br />
        <br />
        <p className="inline">결제금액</p>
        <p className="menu_price">결제예정 8,000원</p>
        <br />
        <br />
      </div>
    </StyledOrderInfo>
  )
}
