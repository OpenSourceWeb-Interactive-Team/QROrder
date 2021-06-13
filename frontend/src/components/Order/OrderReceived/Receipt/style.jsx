import styled from 'styled-components'

const Receipt = styled.div`
  height: auto;
  padding: 1em 1em 0 1em;
  clear: both;
  display: block;
  background-color: white;
  border-radius: 5px 5px 5px 5px;
  box-shadow: 0px 0px 3px 3px #dcdcdc;

  .ordertitle {
    padding: 0 0 1em 0;
    display: block;
    border-bottom: 2px solid black;
    display: flex;
    .title {
      margin-right: auto;
      color: rgb(0, 0, 0);
      font-size: 1em;
      font-weight: bold;
    }
    .num {
      margin-left: auto;
    }
  }
  .receipt {
    clear: both;
    padding: 1em 0 0 0;
  }

  .discount {
    display: flex;
    font-size: 1rem;
    font-weight: 500;
    padding: 0 0 1em 0;
    .title {
      margin-right: auto;
    }
    .amount {
      margin-left: auto;
      color: #df3030;
    }
  }

  .tot_price {
    border-top: 2px solid black;
    padding: 1em 0;
    display: flex;
    .title1 {
      display: inline-block;
      margin-right: auto;
      color: rgb(0, 0, 0);
      font-size: 1.3em;
      font-weight: bold;
    }
    .num1 {
      font-size: 1.3em;
      font-weight: bold;
      display: inline-block;
      margin-left: auto;
    }
  }
`

export default Receipt
