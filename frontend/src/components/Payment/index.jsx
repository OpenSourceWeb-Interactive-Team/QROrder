import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { RiCoupon2Line } from 'react-icons/ri'
import { discountCash } from '../../modules/basket'
import { AiOutlineClose } from 'react-icons/ai'

import { toPriceFormat } from '../../utils/format'
import StyledPayment from './style'

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
    coupon_number: 0,
  })
  const [totalPrice, setTotalPrice] = useState(0)
  const products = useSelector(state => state.basket.product.filter(product => product.quantity > 0))
  const store = useSelector(state => state.basket.store)

  const dispatch = useDispatch()
  useEffect(() => {
    let price = 0
    products.map(product => (price += product.price * product.quantity))
    setTotalPrice(price)
  }, [products])

  function getCoupon(number) {
    const coupon = coupons.find(coupon => coupon.number === number)
    return coupon
  }

  function getDiscountTotalPrice() {
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
      <header>
        <p>결제하기</p>
        <Link to="/basket">
          <AiOutlineClose className="close-icon" />
        </Link>
      </header>
      <div className="box order">
        <div className="title">주문 정보</div>
        <div className="store">{store.name}</div>
        <div className="menu-list">
          {products.map(product => (
            <div className="menu" key={product.name}>
              <div className="name">{product.name}</div>
              <div className="count">{product.quantity}</div>
              <div className="price">{toPriceFormat(product.quantity * product.price)}</div>
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
        <div className="title-none">결제수단</div>
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
        <div className="title-none">할인쿠폰</div>
        <div className="coupon-list">
          <div
            className={discount.coupon_number === 1 && discount.select ? 'coupon select' : 'coupon'}
            onClick={() => {
              selectCoupon(1)
              dispatch(discountCash({ type: 'percent', amount: 10 }))
            }}>
            <RiCoupon2Line className="icon" />
            <div className="name">10% 할인 쿠폰</div>
          </div>
          <div
            className={discount.coupon_number === 2 && discount.select ? 'coupon select' : 'coupon'}
            onClick={() => {
              selectCoupon(2)
              dispatch(discountCash({ type: 'percent', amount: 15 }))
            }}>
            <RiCoupon2Line className="icon" />
            <div className="name">15% 할인 쿠폰</div>
          </div>
          <div
            className={discount.coupon_number === 3 && discount.select ? 'coupon select' : 'coupon'}
            onClick={() => {
              selectCoupon(3)
              dispatch(discountCash({ type: 'money', amount: 5000 }))
            }}>
            <RiCoupon2Line className="icon" />
            <div className="name">5000원 할인 쿠폰</div>
          </div>
        </div>
      </div>
      <div className="box total">
        <div className="title-none">결제금액</div>
        <div className="total-price">
          <div className={discount.select ? 'original line' : 'original'}>{toPriceFormat(totalPrice)}</div>
          {discount.select && <div className="discount">{toPriceFormat(getDiscountTotalPrice())}</div>}
        </div>
      </div>
      <Link to="/ordered">
        <div className="bottom">
          <div className="pay">{toPriceFormat(getDiscountTotalPrice())}원 결제하기</div>
        </div>
      </Link>
    </StyledPayment>
  )
}

export default Payment
