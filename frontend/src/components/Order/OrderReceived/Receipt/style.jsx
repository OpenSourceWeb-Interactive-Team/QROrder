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
    .title {
      display: inline-block;
      text-align: left;
      color: rgb(0, 0, 0);
      font-size: 1em;
      font-weight: bold;
    }
    .num {
      display: inline-block;
      float: right;
    }
  }
  .receipt {
    clear: both;
    padding: 1em 0 0 0;
  }
  .tot_price {
    border-top: 2px solid black;
    padding: 1em 0;
    .title1 {
      display: inline-block;
      text-align: left;
      color: rgb(0, 0, 0);
      font-size: 1.3em;
      font-weight: bold;
    }
    .num1 {
      font-size: 1.3em;
      font-weight: bold;
      display: inline-block;
      float: right;
    }
  }
`

export default Receipt
