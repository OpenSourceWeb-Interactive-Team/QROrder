import styled from 'styled-components'

const Chart = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 0px;
  align-items: center;
  margin: 20px 10px;
  position: relative;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-radius: 10px;
  .favor {
    margin-bottom: 1em;
    font-size: 1.3rem;
  }
  .graph {
    display: flex;
    position: relative;
    .legend {
      margin-top: 1em;
      display: flex;
      align-items: center;
      justify-content: center;
      .legend-sub {
        align-items: center;
        justify-content: center;
        margin: 0 0.5em 0 0.5em;
        .bg_color1 {
          display: inline-block;
          width: 15px;
          height: 15px;
          background-color: #0ac9ff;
          border-radius: 50%;
          margin-right: 0.3em;
        }
        .bg_color2 {
          display: inline-block;
          width: 15px;
          height: 15px;
          background-color: #f88ef4;
          border-radius: 50%;
          margin-right: 0.3em;
        }
        .legend-text {
          color: gray;
          position: relative;
          top: -2px;
          font-size: 0.9em;
          font-weight: bold;
          display: inline-block;
        }
      }
    }
  }
`

export default Chart
