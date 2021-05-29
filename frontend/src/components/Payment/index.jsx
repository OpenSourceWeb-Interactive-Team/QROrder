import { useState } from 'react'
import { RiCoupon2Line } from 'react-icons/ri'
import { toPriceFormat } from '../../utils/format'
import StyledPayment from './style'

const order = {
  type: '포장',
  store: '초밥천국',
  basket: [
    {
      id: 1,
      name: '우동',
      count: 2,
      price: 3000,
    },
    {
      id: 2,
      name: '초밥',
      count: 1,
      price: 8000,
    },
  ],
}

const customer = {
  nickname: '제리',
  phone: '010-5686-1069',
  require: '',
}

const coupons = [
  {
    number: 1,
    type: 'percent',
    percent: 10,
  },
  {
    number: 2,
    type: 'percent',
    percent: 15,
  },
  {
    number: 3,
    type: 'money',
    money: 5000,
  },
]

function Payment() {
  const [discount, setDiscount] = useState({
    select: false,
    coupon_number: 1,
  })

  function getTotalPrice() {
    const totalPrice = order.basket.reduce((prev, cur) => {
      return prev + cur.price * cur.count
    }, 0)

    return totalPrice
  }

  function getCoupon(number) {
    const coupon = coupons.find(coupon => coupon.number === number)
    return coupon
  }

  function getDiscountTotalPrice() {
    const totalPrice = getTotalPrice()
    if (discount.select === false) return totalPrice

    const coupon = getCoupon(discount.coupon_number)

    if (coupon.type === 'percent') {
      return totalPrice - totalPrice * (coupon.percent / 100)
    }

    return totalPrice - coupon.money
  }

  function selectCoupon(coupon_number) {
    if (discount.coupon_number === coupon_number) {
      setDiscount({
        select: false,
      })
      return
    }
    setDiscount({
      select: true,
      coupon_number,
    })
  }

  return (
    <StyledPayment>
      <div className="box order">
        <div className="title">주문 정보</div>
        <div className="type">포장</div>
        <div className="store">초밥천국</div>
        <div className="menu-list">
          {order.basket.map(menu => (
            <div className="menu" key={menu.id}>
              <div className="name">{menu.name}</div>
              <div className="count">{menu.count}</div>
              <div className="price">{toPriceFormat(menu.count * menu.price)}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="box customer">
        <div className="title">주문자 정보</div>
        <div className="nickname">{customer.nickname}</div>
        <div className="phone">{customer.phone}</div>
        <div className="require">요청사항</div>
        <input type="text" placeholder="예) 브로콜리 빼주세요" />
      </div>
      <div className="box">
        <div className="title">결제수단</div>
        <div className="select">
          <div>
            <input type="radio" name="payment" value="credit" />
            <label>신용카드</label>
          </div>
          <div>
            <input type="radio" name="payment" value="money" />
            <label>현금</label>
          </div>
          <div>
            <input type="radio" name="payment" value="point" />
            <label>포인트</label>
          </div>
        </div>
      </div>
      <div className="box discount">
        <div className="title">할인쿠폰</div>
        <div className="coupon-list">
          <div className={discount.coupon_number === 1 ? 'coupon select' : 'coupon'} onClick={() => selectCoupon(1)}>
            <RiCoupon2Line className="icon" />
            <div className="name">10% 할인 쿠폰</div>
          </div>
          <div className={discount.coupon_number === 2 ? 'coupon select' : 'coupon'} onClick={() => selectCoupon(2)}>
            <RiCoupon2Line className="icon" />
            <div className="name">15% 할인 쿠폰</div>
          </div>
          <div className={discount.coupon_number === 3 ? 'coupon select' : 'coupon'} onClick={() => selectCoupon(3)}>
            <RiCoupon2Line className="icon" />
            <div className="name">5000원 할인 쿠폰</div>
          </div>
        </div>
      </div>
      <div className="box total">
        <div className="title">결제금액</div>
        <div className="total-price">
          <div className={discount.select ? 'original line' : 'original'}>{toPriceFormat(getTotalPrice())}</div>
          {discount.select && <div className="discount">{toPriceFormat(getDiscountTotalPrice())}</div>}
        </div>
      </div>

      <div className="bottom">
        <div className="pay">{toPriceFormat(getDiscountTotalPrice())}원 결제하기</div>
      </div>
    </StyledPayment>
  )
}

export default Payment
