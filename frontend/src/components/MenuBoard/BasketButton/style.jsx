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

  .count {
    position: absolute;
    top: 10px;
    right: 10px;
    width: 19px;
    height: 19px;
    background-color: #ffffff;
    color: #03c759;
    border-radius: 50%;
    border: 1px solid #03c759;
    font-size: 0.8rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .add {
    animation: downtop 1.2s;
    position: absolute;
    margin-left: 1.2rem;
    font-size: 0.8rem;
    animation-fill-mode: forwards;
    color: gray;
    font-weight: 700;
  }

  @keyframes downtop {
    from {
      margin-bottom: 0.8rem;
    }

    to {
      margin-bottom: 4rem;
      opacity: 0;
    }
  }
`

export default BasketButton
