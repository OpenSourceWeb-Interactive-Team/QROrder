import StyledStore from './style'
import { IoIosCall, IoIosPin } from 'react-icons/io'
import { AiFillStar } from 'react-icons/ai'
import GoogleMapReact from 'google-map-react'
import API_KEY from './api.key.json'

function Store() {
  const center = {
    lat: 36.634398969276475,
    lng: 127.46114835398262,
  }
  const zoom = 16

  const Pin = () => <IoIosPin className="pin" />

  const options = {
    fullscreenControl: false,
  }

  return (
    <StyledStore>
      <div className="name">우리집밥상</div>
      <div className="number">
        <IoIosCall className="phone-icon" />
        043-263-3999
      </div>
      <div className="score">
        <AiFillStar className="star-icon" />
        <AiFillStar className="star-icon" />
        <AiFillStar className="star-icon" />
        <AiFillStar className="star-icon" />
        <AiFillStar className="star-icon" />
        <div className="number">4.8</div>
      </div>
      <div className="address">충청북도 청주시 서원구 사창동 258-4 1층</div>
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
