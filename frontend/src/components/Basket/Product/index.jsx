import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { FiPlusSquare, FiMinusSquare } from 'react-icons/fi'
import { plus, minus,getInitPrice } from '../../../modules/basket'

function Product({ title, price }) {
  const [quantity, setQuantity] = useState(1)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getInitPrice({ price }))
  }, [dispatch, price])

  const itemPlus = () => {
    setQuantity(quantity + 1)
    dispatch(plus({ price }))
  }

  const itemMinus = () => {
    if (quantity === 0) return
    setQuantity(quantity - 1)
    dispatch(minus({ price }))
  }
  return (
    <div className="product">
      <p className="title">{title}</p>
      <div className="detail">
        <div className="quantity">
          <FiMinusSquare className="minus-icon" onClick={itemMinus} />
          <p>{quantity}</p>
          <FiPlusSquare className="plus-icon" onClick={itemPlus} />
        </div>
        <p className="price">{price * quantity}원</p>
      </div>
    </div>
  )
}

export default Product
