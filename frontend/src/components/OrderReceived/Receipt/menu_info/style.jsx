import styled from 'styled-components'

const MenuInfo = styled.div`
  .menu_frame {
    height: auto;
    overflow: hidden;
    padding: 0 0 1em 0;
    .menu {
      overflow: hidden;
      width: 75%;
      float: left;
      .menu_name {
        display: inline;
        float: left;
        font-weight: bold;
      }
      .menu_price {
        color: #afafaf;
        margin: auto;
        text-align: right;
      }
      .menu_detail {
        overflow: hidden;
        padding: 0.5em 0;
        color: #afafaf;
        font-size: 0.9em;
        .detail {
          display: inline;
          float: left;
          font-weight: bold;
        }
        .price_detail {
          margin: auto;
          text-align: right;
        }
      }
    }

    .price {
      width: 75%;
      float: left;
      color: #afafaf;
      font-weight: bold;
      text-align: right;
      .sub_price {
        display: inline;
      }
      .menu_num {
        display: inline;
      }
    }
    .total_price {
      width: 25%;
      float: right;
      text-align: right;
      color: black;
      font-weight: bold;
    }
  }
`

export default MenuInfo
