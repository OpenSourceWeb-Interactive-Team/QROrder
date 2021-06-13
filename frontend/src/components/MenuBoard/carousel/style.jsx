import styled from 'styled-components'

const Carousel = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 0px;
  align-items: center;
  margin: 20px 10px;
  position: relative;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-radius: 10px;
  .carou {
    width: 250px;
    height: 200px;
  }
  .favor {
    margin-bottom: 1em;
    font-size: 1.3rem;
  }
`

export default Carousel
