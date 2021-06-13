import StyledDrawer from './style'
import { Link } from 'react-router-dom'

function Drawer({ restaurant }) {
  console.log(restaurant)
  return (
    <Link to={`/menu/${restaurant.id}`}>
      <StyledDrawer>
        <picture>
          <img src={restaurant.image} alt="상점" />
        </picture>
        <div className="info">
          <div className="name">{restaurant.name}</div>
          <div className="address">{restaurant.address}</div>
          <div className="menu">
            <p>
              {restaurant.menu[0].name} {restaurant.menu[0].price}원
            </p>
            <p>
              {restaurant.menu[1].name} {restaurant.menu[1].price}원
            </p>
          </div>
        </div>
      </StyledDrawer>
    </Link>
  )
}

export default Drawer
