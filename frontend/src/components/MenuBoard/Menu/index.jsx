import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { AiOutlineShoppingCart, AiFillStar } from 'react-icons/ai'

import StyledMenu from './style'
import { toPriceFormat } from '../../../utils/format'
import { plus, getInitProduct } from '../../../modules/basket'

function Menu({ menuDetail }) {
  const { name, price, score, description, tag, image } = menuDetail

  const [quantity, setQuantity] = useState(0)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getInitProduct({ name, quantity, price }))
  }, [])

  const itemPlus = () => {
    setQuantity(quantity + 1)
    dispatch(plus({ name }))
  }

  return (
    <StyledMenu>
      <picture className="image">
        <img src={image} alt={name} style={{ objectFit: 'cover', loading: 'lazy' }} />
      </picture>
      <div className="contents">
        <div className="name">
          {name}
          {tag && <div className="tag">대표</div>}
        </div>
        <div className="info">
          <div className="price">{toPriceFormat(price)}원</div>
          <div className="score">
            <AiFillStar className="star" />
            <div>{Number.parseFloat(score).toFixed(1)}</div>
          </div>
        </div>
        <div className="desc">{description}</div>
      </div>
      <div className="shop" onClick={itemPlus}>
        <AiOutlineShoppingCart />
      </div>
    </StyledMenu>
  )
}

export default Menu
