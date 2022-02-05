import styled from 'styled-components'

const OrderReceived = styled.div`
  overflow: hidden;
  .page {
    display: flex;
    align-items: center;
    overflow: hidden;

    .frame {
      width: 100%;
      height: auto;
      overflow: hidden;
      background: ${props => `linear-gradient(${props.bgColor} 20%, #fff 20%)`};
      padding: 1rem 1.2rem;

      .table {
        padding: 5px 0;
        margin: 3px 0;
        font-size: 1rem;
        font-weight: bold;
        border-radius: 5px 5px 5px 5px;
        width: 7em;
        display: block;
        color: ${props => `${props.bgColor}`};
        text-align: center;
        background-color: #ffffff;
      }

      .food {
        font-size: 1.3em;
        padding: 0.7em 0;
        color: white;
        float: left;
        display: inline;
      }
    }
  }
`

export default OrderReceived
