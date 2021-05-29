import StyledStore from './style'
import { IoIosCall, IoIosPin } from 'react-icons/io'
import { AiFillStar } from 'react-icons/ai'
import GoogleMapReact from 'google-map-react'
import API_KEY from './api.key.json'

function Store() {
  const mapStyles = {
    width: '100%',
    height: '100%',
  }

  const center = {
    lat: 36.632358,
    lng: 127.4585219,
  }
  const zoom = 16

  const Pin = () => <IoIosPin className="pin" />

  const options = {
    fullscreenControl: false,
  }

  return (
    <StyledStore>
      <div className="name">맘스터치 충북대점</div>
      <div className="number">
        <IoIosCall className="phone-icon" />
        02-452-1424
      </div>
      <div className="score">
        <AiFillStar className="star-icon" />
        <AiFillStar className="star-icon" />
        <AiFillStar className="star-icon" />
        <AiFillStar className="star-icon" />
        <AiFillStar className="star-icon" />
        <div className="number">4.8</div>
      </div>
      <div className="address">충북 청주시 서원구 내수동로102번길 36</div>
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
