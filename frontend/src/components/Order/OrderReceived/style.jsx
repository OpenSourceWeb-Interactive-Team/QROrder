import styled from 'styled-components'

const OrderReceived = styled.div`
  padding: 0.8rem 0rem; overflow : hidden;
  .page{
    display: flex;
    justify-content: center;
    align-items: center;
    overflow : hidden;
    
    .frame{
      width: 30em; height: auto; overflow : hidden;
      background: linear-gradient(#0AC9FF 20%, #fff 20%);
      border-radius: 10px 10px 10px 10px;
      box-shadow: 0px 0px 3px 3px #dcdcdc;
      padding: 1rem 1.2rem;
      margin: 1rem;

      .table{
        padding: 5px 0;
        font-size: 1rem;
        font-weight: bold;
        border-radius: 5px 5px 5px 5px;
        width: 7em;
        // width: calc(100% - 23rem);
        display : block;
        // -webkit-line-clamp : 1;
        // -webkit-box-orient: vertical;
        color: #0AC9FF;
        text-align: center;
        background-color: #FFFFFF;
      }

      .food{
        font-size: 1.3em;
        padding: 0.5em 0;
        color: white;
        float: left;
        display:inline;
      }
    }
  }
  `

export default OrderReceived