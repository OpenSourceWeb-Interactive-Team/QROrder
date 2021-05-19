import { AiOutlineShoppingCart, AiFillStar } from 'react-icons/ai'
import StyledMenu from './style'

function Menu() {
  return (
    <StyledMenu>
      <div className="image"></div>
      <div className="contents">
        <div className="name">
          베트남 볶음밥
          <div className="tag">대표</div>
        </div>
        <div className="info">
          <div className="price">11,900원</div>
          <div className="score">
            <AiFillStar className="star" />
            <div>4.3</div>
          </div>
        </div>
        <div className="desc">
          돼지고기에ㅁㄴㄹㅁㄹㅁㄴㄹㅁㄹㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㄴㅁㄹㄴ돼지고기에ㅁㄴㄹㅁㄹㅁㄴㄹㅁㄹㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㄴㅁㄹㄴㅁㄹㅁㄴㅁㄹㅁㄴ
        </div>
      </div>
      <div className="shop">
        <AiOutlineShoppingCart />
      </div>
    </StyledMenu>
  )
}

export default Menu
