import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { FiPlusSquare, FiMinusSquare } from 'react-icons/fi'
import { plus, minus } from '../../../modules/basket'
import { toPriceFormat } from '../../../utils/format'

function Product(props) {
  const { name, price } = props
  const [quantity, setQuantity] = useState(props.quantity)
  const dispatch = useDispatch()

  const itemPlus = () => {
    setQuantity(quantity + 1)
    dispatch(plus({ name }))
  }

  const itemMinus = () => {
    if (quantity === 0) return
    setQuantity(quantity - 1)
    dispatch(minus({ name }))
  }
  return (
    <div className="product">
      <p className="title">{name}</p>
      <div className="detail">
        <div className="quantity">
          <FiMinusSquare className="minus-icon" onClick={itemMinus} />
          <p>{quantity}</p>
          <FiPlusSquare className="plus-icon" onClick={itemPlus} />
        </div>
        <p className="price">{toPriceFormat(price * quantity)}원</p>
      </div>
    </div>
  )
}

export default Product
