import { useState, useCallback } from 'react'
import StyledMap from './style'
import { IoIosPin } from 'react-icons/io'
import { IoFastFoodOutline } from 'react-icons/io5'
import { GiChickenOven, GiHotMeal } from 'react-icons/gi'
import { FaPizzaSlice, FaFish } from 'react-icons/fa'

import GoogleMapReact from 'google-map-react'
import API_KEY from '../MenuBoard/Store/api.key.json'
import Drawer from './Drawer'

function RestaurantMap() {
  const [drawerState, setDrawerState] = useState(false)

  const onSelectRestaurant = useCallback(e => {
    setDrawerState(true)
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

  const BasePin = ({ Icon, color = 'black', size = '1.8rem' }) => (
    <Icon
      className="base-pin"
      style={{
        color,
        fontSize: size,
        background: color === 'black' && 'white',
        borderRadius: color === 'black' && '50%',
      }}
      onClick={e => onSelectRestaurant(e)}
    />
  )

  const options = {
    fullscreenControl: false,
  }
  return (
    <StyledMap>
      <div className="position" style={{ height: '100vh', width: '100vw' }} onClick={() => handleDrawer()}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: API_KEY.key }}
          defaultCenter={center}
          defaultZoom={zoom}
          options={options}>
          <BasePin Icon={IoIosPin} color="#e93737" size="2rem" lat={center.lat} lng={center.lng} />
          <BasePin Icon={IoFastFoodOutline} lat={36.63320233130599} lng={127.45270562897606} />
          <BasePin Icon={GiChickenOven} lat={36.63297570941198} lng={127.45448311529408} />
          <BasePin Icon={FaFish} lat={36.63385553185957} lng={127.45714103876028} />
          <BasePin Icon={GiHotMeal} lat={36.63277574836374} lng={127.46051327915802} />
          <BasePin Icon={FaPizzaSlice} lat={36.6357484491276} lng={127.45865273273168} />
        </GoogleMapReact>
        {drawerState && <Drawer />}
      </div>
    </StyledMap>
  )
}

export default RestaurantMap
