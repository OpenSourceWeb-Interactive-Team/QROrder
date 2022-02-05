import styled from 'styled-components'

const OrderProcess = styled.div`
  height: auto;
  padding: 0.8em 0;
  text-align: center;
  clear: both;
  display: block;
  background-color: white;
  border-radius: 5px 5px 5px 5px;
  box-shadow: 0px 0px 3px 3px #dcdcdc;

  p {
    color: rgb(51, 51, 51);
    font-size: 0.8em;
    padding: 0.5em 0;
    font-weight: bold;
  }

  .box {
    margin: 0.5em auto;
    textAlign: center;
    align-items: center;
    .containerStyles {
      text-align: center;
      z-index: 0;
      position: relative;
      display: block;
      height: 2%;
      width: 90%;
      background-color: #e0e0de;
      border-radius: 50px; 
      margin: auto;
      .fillerStyles {
        z-index: 1;
        height: auto;
        width: ${props => `${props.id * 50}%`};
        background-color: ${props => `${props.bg}`};
        border-radius: inherit;
        text-align: right;
        transition: width 1s ease-in-out;
        .labelStyles {
          padding: 5px;
          color: white;
          font-weight: bold;
        }
      }
      
      .circles {
        top: -7px;
        margin: auto;
        display: flex;
        position: absolute;
        justify-content: space-between;
        width: 100%;
        .circleStyles {
          width: 30px;
          height: 30px;
          border: 3px solid;
          border-radius: 50%;
          transition: background-color border-color 2s ease-in-out;
          .icon {
            color: white;
            font-size: 25px;
            vertical-align: middle;
          }
        }
        .one {
          background-color: ${props => props.id >= 0 ? props.bg : `#e0e0de`};
          border-color: ${props => props.id >= 0 ? props.bg : `#e0e0de`};
        }
        .two {
          background-color: ${props => props.id >= 1 ? props.bg : `#e0e0de`};
          border-color: ${props => props.id >= 1 ? props.bg : `#e0e0de`};
        }
        .three {
          background-color: ${props => props.id === 2 ? props.bg : `#e0e0de`};
          border-color: ${props => props.id >= 2 ? props.bg : `#e0e0de`};
        }
      }
    }
  }

  .processtext {
    width: 90%;
    text-align: center;
    display: flex;
    justify-content: space-between;
    margin: 0.5em auto;
    .text {
      margin: 10px;
    }
  }
`

export default OrderProcess
