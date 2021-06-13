import { useState, useCallback, useEffect } from 'react'
import StyledMap from './style'
import { IoIosPin } from 'react-icons/io'
import { IoFastFoodOutline } from 'react-icons/io5'
import { GiChickenOven, GiHotMeal } from 'react-icons/gi'
import { FaPizzaSlice, FaFish } from 'react-icons/fa'

import GoogleMapReact from 'google-map-react'
import API_KEY from '../MenuBoard/Store/api.key.json'
import Drawer from './Drawer'
import useStore from '../../hooks/useStore'

function RestaurantMap() {
  const [drawerState, setDrawerState] = useState(false)
  const [restaurant, setRestaurant] = useState()
  const stores = useStore()

  const onSelectRestaurant = useCallback((e, store) => {
    setDrawerState(true)
    setRestaurant(store)
    e.stopPropagation()
  }, [])

  const handleDrawer = () => {
    setDrawerState(false)
  }

  const center = {
    lat: 36.62906052495774,
    lng: 127.45631350508881,
  }
  const zoom = 16

  const Pin = ({ Icon, color = 'black', size = '1.8rem', store }) => (
    <Icon
      className="pin"
      style={{
        color,
        fontSize: size,
        background: color === 'black' && 'white',
        borderRadius: color === 'black' && '50%',
      }}
      onClick={e => onSelectRestaurant(e, store)}
    />
  )

  const getIconName = ({ type }) => {
    switch (type) {
      case 'hamburger':
        return IoFastFoodOutline
      case 'chicken':
        return GiChickenOven
      case 'fish':
        return FaFish
      case 'rice':
        return GiHotMeal
      case 'pizza':
        return FaPizzaSlice
      default:
        return GiHotMeal
    }
  }

  const options = {
    fullscreenControl: false,
  }

  if (!stores) return <></>
  return (
    <StyledMap>
      <div className="position" style={{ height: '100vh', width: '100vw' }} onClick={() => handleDrawer()}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: API_KEY.key }}
          defaultCenter={center}
          defaultZoom={zoom}
          options={options}>
          {stores.map(store => (
            <Pin
              key={store.name}
              Icon={getIconName(store.icon)}
              lat={store.position[0]}
              lng={store.position[1]}
              store={store}
            />
          ))}
          <Pin Icon={IoIosPin} color="#e93737" size="2rem" lat={center.lat} lng={center.lng} />
        </GoogleMapReact>
        {drawerState && <Drawer restaurant={restaurant} />}
      </div>
    </StyledMap>
  )
}

export default RestaurantMap
