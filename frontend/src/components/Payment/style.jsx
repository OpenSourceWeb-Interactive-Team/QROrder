import styled from 'styled-components'

const Payment = styled.div`
  background-color: rgb(246, 246, 246);
  min-height: 100vh;

  .box {
    background-color: white;
    padding: 10px;
    margin-top: 10px;
    /* width: 100%; */
  }

  .bottom {
    position: fixed;
    left: 0px;
    bottom: 0px;
    text-align: center;
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 10px 0px;
    border-top: 1px solid #e7e7e7;
    background-color: white;
    .pay {
      width: 95%;
      background-color: #6ae026;
      border-radius: 5px;
      padding: 10px 0px;
      color: white;
      cursor: pointer;
    }
  }
`

export default Payment
