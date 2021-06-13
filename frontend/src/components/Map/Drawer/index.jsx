import StyledDrawer from './style'
import { Link } from 'react-router-dom'

function Drawer({ restaurant }) {
  return (
    <Link to="/menu">
      <StyledDrawer>
        <picture>
          <img
            src="https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20180130_263%2F1517301583613dwuaL_JPEG%2FZh5SeEjUT12rWxcLJ2nstPaB.jpg"
            alt="상점"
          />
        </picture>
        <div className="info">
          <div className="name">{restaurant.name}</div>
          <div className="address">{restaurant.address}</div>
          <div className="menu">
            {restaurant.menu[0].name} {restaurant.menu[0].price}원
          </div>
        </div>
      </StyledDrawer>
    </Link>
  )
}

export default Drawer
