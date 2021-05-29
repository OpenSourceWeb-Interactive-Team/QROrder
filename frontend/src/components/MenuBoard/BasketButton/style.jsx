import styled from 'styled-components'

const BasketButton = styled.div`
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 60px;
  height: 60px;
  background-color: #03c759;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;

  .icon {
    color: white;
    font-size: 1.8rem;
    cursor: pointer;
  }
`

export default BasketButton
