import styled from 'styled-components'

const Basket = styled.div`
  background: #f6f6f6;

  header {
    display: flex;
    width: 100%;
    padding-top: 1rem;
    padding-bottom: 1rem;
    margin-bottom: 1rem;
    background: #fff;
    font-size: 1.3rem;

    p {
      margin: 0 auto;
    }
    .close-icon {
      position: absolute;
      right: 1rem;
    }
  }

  section {
    .means {
      margin: 0 auto;
      padding-top: 2rem;
      margin-bottom: 0.8rem;
      padding-left: 1.5rem;
      background: #fff;

      .visit,
      .takeaway {
        display: flex;
      }

      .bag-icon,
      .fork-icon,
      .check-icon,
      .uncheck-icon {
        color: #03c759;
        font-size: 1.2rem;
        margin-right: 0.2rem;
        margin-left: 0.2rem;
      }

      .title {
        display: flex;
        color: #03c759;
        font-weight: 600;
        font-size: 1.3rem;
        margin-bottom: 1rem;
      }

      .description {
        font-weight: 0;
        margin-bottom: 1rem;
      }
    }

    .products {
      background: #fff;
      padding-top: 2rem;
      margin-bottom: 0.8rem;
      padding-left: 1.5rem;
      padding-right: 1.5rem;

      .product {
        padding-top: 2rem;
        padding-bottom: 1rem;
        border-bottom: 1px solid #e5e5e5;

        .title {
          font-size: 1.1rem;
          font-weight: 500;
          margin-bottom: 1rem;
        }

        &:last-child {
          border-bottom: 3px solid #d5dadc;
        }
      }

      .detail {
        display: flex;
        align-items: center;

        .quantity {
          display: flex;
          align-items: center;

          .minus-icon,
          .plus-icon {
            color: #03d680;
            font-size: 1.6rem;
          }

          p {
            font-size: 1.1rem;
            font-weight: 700;
            margin: 0.5rem;
          }
        }
        .price {
          margin-left: auto;
          font-size: 1.1rem;
          font-weight: 600;
          color: #fe3e3a;
        }
      }

      .total-price {
        display: flex;
        font-weight: 700;
        padding-top: 2rem;
        font-size: 1.2rem;
        margin-bottom: 5rem;
        p {
          margin-left: auto;
          font-size: 1.2rem;
          color: #fe3e3a;
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
  }
`

export default Basket
