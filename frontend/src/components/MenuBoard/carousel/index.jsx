import StyledCarousel from './style'
import { useState } from 'react'
import { Carousel, Images } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

function Carousell() {
  const [index, setIndex] = useState(0)

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex)
  }

  return (
    <StyledCarousel>
      <p className="favor">대표메뉴</p>
      <Carousel activeIndex={index} onSelect={handleSelect} className="carou">
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100 rounded"
            src="https://i.ytimg.com/vi/iPk145zzwws/maxresdefault.jpg"
            alt="First slide"
            width="250px"
            height="200px"
          />
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100 rounded"
            src="https://www.chungjungone.com/knowhow/images/blog/ezr/ker30/1.jpg"
            alt="Second slide"
            width="250px"
            height="200px"
          />
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100 rounded"
            src="http://www.cbinews.co.kr/news/photo/200812/51033_27952_2443.jpg"
            alt="Third slide"
            width="250px"
            height="200px"
          />
        </Carousel.Item>
      </Carousel>
    </StyledCarousel>
  )
}

export default Carousell
