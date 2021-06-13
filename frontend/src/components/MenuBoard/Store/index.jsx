import StyledStore from './style'
import { IoIosCall, IoIosPin } from 'react-icons/io'
import { AiFillStar, AiOutlineQrcode } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import GoogleMapReact from 'google-map-react'
import API_KEY from './api.key.json'

function Store({ store }) {
  const center = {
    lat: store.position[0],
    lng: store.position[1],
  }
  const zoom = 16

  const Pin = () => <IoIosPin className="pin" />

  const options = {
    fullscreenControl: false,
  }

  return (
    <StyledStore>
      <div className="name">{store.name}</div>
      <Link to={`/qrcode/${store.id}`}>
        <div className="qrcode">
          <AiOutlineQrcode />
        </div>
      </Link>
      <div className="number">
        <IoIosCall className="phone-icon" />
        {store.phone}
      </div>
      <div className="score">
        <AiFillStar className="star-icon" />
        <AiFillStar className="star-icon" />
        <AiFillStar className="star-icon" />
        <AiFillStar className="star-icon" />
        <AiFillStar className="star-icon" />
        <div className="number">{store.star}</div>
      </div>
      <div className="address">{store.address}</div>
      <div className="position" style={{ height: '100px', width: '200px' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: API_KEY.key }}
          defaultCenter={center}
          defaultZoom={zoom}
          options={options}>
          <Pin lat={center.lat} lng={center.lng} />
        </GoogleMapReact>
      </div>
    </StyledStore>
  )
}

export default Store
