import styled from 'styled-components'

const Menu = styled.div`
  display: flex;
  padding: 0.8rem 0rem;
  border-bottom: 1px solid #eee8e8;

  .image {
    background-image: url('http://d20aeo683mqd6t.cloudfront.net/ko/articles/title_images/000/039/143/medium/IMG_5649%E3%81%AE%E3%82%B3%E3%83%92%E3%82%9A%E3%83%BC.jpg?2019');
    background-size: cover;
    height: 5rem;
    width: 5rem;
    margin-right: 0.6rem;
  }

  .contents {
    width: calc(100% - 6rem);
    padding: 0.4rem 0rem;

    .name {
      font-weight: 500;
      display: flex;
      align-items: center;

      .tag {
        font-size: 0.6rem;
        color: white;
        background: #f0bb0c;
        padding: 0.2rem 0.3rem;
        border-radius: 15px;
        margin-left: 0.3rem;
        margin-top: -0.2rem;
      }
    }

    .info {
      display: flex;
      font-size: 0.9rem;
      font-weight: 700;
      margin-top: 0.5rem;
      margin-bottom: 0.2rem;

      .price {
        color: #f36666;
        font-size: 0.8rem;
      }

      .score {
        margin-left: 1.2rem;
        display: flex;
        font-size: 0.8rem;
        align-items: center;

        .star {
          color: #eb5252;
          margin-top: -0.1rem;
          margin-right: 0.1rem;
        }
      }
    }

    .desc {
      font-size: 0.7rem;
      color: gray;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      line-height: 15px;
      margin-top: 0.3rem;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }

  .shop {
    border: 1px solid #e6e6e6;
    border-radius: 20%;
    color: #47ce47;
    align-self: center;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
    margin-left: 1rem;
    cursor: pointer;
  }
`

export default Menu
