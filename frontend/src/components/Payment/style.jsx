import styled from 'styled-components'

const Payment = styled.div`
  background-color: #f6f6f6;
  min-height: 100vh;
  overflow: hidden;

  .box {
    background-color: white;
    padding: 20px 15px;
    margin-top: 10px;

    & > .title {
      font-size: 1.2rem;
    }

    input[type='text'] {
      width: 100%;
      border: none;
      outline: none;
      background-color: #f6f6f6;
      font-size: 1rem;
      padding: 10px 5px;
    }

    .select {
      margin: 3px 0px;
      input[type='radio'] {
        margin: 6px 5px;
      }
    }

    &.order {
      .type {
        display: flex;
        margin: 5px 0px;
      }
      .store {
        margin: 5px 0px;
      }

      .menu-list {
        font-size: 0.85rem;
        color: #504949;

        .menu {
          display: flex;
          margin: 2px 0px;
          .count {
            margin-left: 3px;
          }
          .count:before {
            content: 'x';
          }
          .price {
            margin-left: auto;
          }
          .price::after {
            content: '원';
          }
        }
      }
    }

    &.customer {
      .nickname {
        margin: 8px 0px;
      }
      .phone {
        margin: 8px 0px;
        font-size: 1.1rem;
      }

      .require {
        font-size: 0.9rem;
        color: #7a7a7a;
        margin-top: 10px;
        margin-bottom: 3px;
      }
      input {
        border: none;
        outline: none;
        background-color: #f6f6f6;
        font-size: 1rem;
        padding: 10px 5px;
      }
    }

    &.total {
      .total-price {
        margin-top: 10px;
        font-size: 1.2rem;
        display: flex;
        .line {
          text-decoration: line-through;
          color: gray;
        }
        .original:after {
          content: '원';
        }
        .discount {
          margin-left: 3px;
          color: #df3030;
        }
        .discount:after {
          content: '원';
        }
      }
    }

    &.discount {
      .icon {
        margin-top: -2px;
        margin-right: 5px;
      }
      .coupon {
        cursor: pointer;
        border: 1px solid transparent;
        color: #2e2b2b;
        display: flex;
        padding: 10px;
        background-color: #f8f5f5;
        margin: 5px 0px;
        align-items: center;
      }
      .coupon:hover {
        border: 1px solid #9b9696;
      }

      .coupon.select {
        background-color: #ffdfdf;
      }
    }
  }

  .bottom {
    position: fixed;
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
      background-color: #03c759;
      border-radius: 5px;
      padding: 10px 0px;
      color: white;
      cursor: pointer;
    }
  }
`

export default Payment
