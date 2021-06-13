import StyledCarousel from './style'
import { useState } from 'react'
import { Carousel, Images } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

function Carousell({ store }) {
  const [index, setIndex] = useState(0)

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex)
  }

  const mainMenus = store.menu.filter(m => m.tag)

  return (
    <StyledCarousel>
      <p className="favor">대표메뉴</p>
      <Carousel activeIndex={index} onSelect={handleSelect} className="carou">
        {mainMenus.map(menu => {
          return (
            <Carousel.Item interval={1000}>
              <img className="d-block w-100 rounded" src={menu.image} alt="First slide" width="250px" height="200px" />
            </Carousel.Item>
          )
        })}
      </Carousel>
    </StyledCarousel>
  )
}

export default Carousell
