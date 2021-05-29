import styled from 'styled-components'

const Store = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 0px;
  align-items: center;
  margin: 20px 10px;

  /* text-align: center; */
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-radius: 10px;

  .name {
    font-size: 1.3rem;
  }
  & > .number {
    display: flex;
    margin-top: 9px;
    font-size: 0.9rem;
    color: gray;
    align-items: center;
    justify-content: center;
    .phone-icon {
      margin-top: -2px;
      margin-right: 2px;
    }
  }

  .score {
    display: flex;
    padding: 10px;
    .star-icon {
      color: #ffc400;
      margin-top: -2px;
    }
    .number {
      font-size: 0.9rem;
      margin-left: 5px;
    }
  }

  .pin {
    font-size: 2rem;
    color: #e93737;
    margin-top: -2rem;
    margin-left: -1rem;
    animation-duration: 3s;
    /* animation: updown; */
  }

  .address {
    color: gray;
    font-size: 0.7rem;
    margin-bottom: 10px;
  }

  @keyframes updown {
    from {
      margin-top: -2rem;
    }

    to {
      margin-top: -5rem;
    }
  }
`

export default Store
