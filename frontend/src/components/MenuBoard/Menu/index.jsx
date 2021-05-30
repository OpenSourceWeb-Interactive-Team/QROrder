import { AiOutlineShoppingCart, AiFillStar } from 'react-icons/ai'
import StyledMenu from './style'
import { toPriceFormat } from '../../../utils/format'

function Menu({ menuDetail }) {
  return (
    <StyledMenu>
      <picture class="image">
        <img src={menuDetail.image} alt={menuDetail.name} style={{ 'object-fit': 'cover', loading: 'lazy' }} />
      </picture>
      <div className="contents">
        <div className="name">
          {menuDetail.name}
          {menuDetail.tag && <div className="tag">대표</div>}
        </div>
        <div className="info">
          <div className="price">{toPriceFormat(menuDetail.price)}원</div>
          <div className="score">
            <AiFillStar className="star" />
            <div>{Number.parseFloat(menuDetail.score).toFixed(1)}</div>
          </div>
        </div>
        <div className="desc">{menuDetail.description}</div>
      </div>
      <div className="shop">
        <AiOutlineShoppingCart />
      </div>
    </StyledMenu>
  )
}

export default Menu
