import StyledMenuInfo from './style'
import { FiCornerDownRight } from 'react-icons/fi'
import { toPriceFormat } from '../../../../../utils/format'

export default function MenuInfo({ product }) {
  const { name, price, quantity } = product
  return (
    <StyledMenuInfo>
      <div className="menu_frame">
        <div className="menu">
          <p className="menu_name">{name}</p>
          <p className="menu_price">{toPriceFormat(price)}</p>
          <div className="menu_detail">
            <p className="detail">
              <FiCornerDownRight />
              수량
            </p>
            <p className="price_detail">{quantity}</p>
          </div>
        </div>
        <div className="price">
          <p className="sub_price">{toPriceFormat(price)}</p>
          <p className="menu_num">x{quantity}</p>
        </div>
        <div className="total_price">{toPriceFormat(price * quantity)}원</div>
      </div>
    </StyledMenuInfo>
  )
}
