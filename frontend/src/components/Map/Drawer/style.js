import styled from 'styled-components'

const Drawer = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  height: 7rem;
  width: 100%;
  z-index: 1000;
  background: #fff;
  display: flex;
  padding-bottom: 1rem;
  border-top-left-radius: 0.7rem;
  border-top-right-radius: 0.7rem;
  picture {
    border-radius: 0.2rem;
    margin-top: 1.3rem;
    margin-left: 1rem;
    img {
      width: 5.5rem;
      height: 5rem;
      border-radius: 0.2rem;
      align-self: center;
      object-fit: cover;
    }
  }
  .info {
    margin-top: 1.5rem;
    margin-left: 1rem;
    font-size: 0.85rem;
    color: black;
    .name {
      font-size: 1rem;
      font-weight: 600;
    }
    .address {
      margin-top: 0.7rem;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      width: 250px;
    }
    .menu {
      margin-top: 0.3rem;
    }
  }
`

export default Drawer
