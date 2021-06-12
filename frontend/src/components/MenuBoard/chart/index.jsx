import StyledChart from './style'
import GoogleChartReact from 'react-google-charts'
import API_KEY from '../Store/api.key.json'

function Chart() {
  const options1 = {
    legend: { position: 'none' },
    colors: ['#0ac9ff'],
    chartArea: {
      width: '90%',
      height: '90%',
    },
    animation: {
      startup: true,
      duration: 1000,
      easing: 'linear',
    },
    hAxis: { textPosition: 'none' },
    vAxis: { textPosition: 'in', gridlines: 'none' },
    annotations: {
      textStyle: {
        fontSize: 12,
        bold: true,
        color: 'white',
      },
    },
  }

  const options2 = {
    pieHole: 0.3,
    legend: 'none',
    colors: ['#F88EF4', '#0ac9ff'],
    chartArea: {
      width: '90%',
      height: '90%',
    },
    pieSliceTextStyle: { bold: true, color: 'white', fontSize: 14 },
  }

  return (
    <StyledChart>
      <p className="favor">연령별 / 성별 인기도</p>
      <div className="graph">
        <div>
          <GoogleChartReact
            bootstrapURLKeys={{ key: API_KEY.key }}
            chartType="BarChart"
            height="150px"
            width="160px"
            data={[
              ['Age', '주문량', { role: 'annotation' }],
              ['20대', 400, '1위'],
              ['30대', 390, '2위'],
              ['40대', 210, '3위'],
              ['50대', 200, '4위'],
            ]}
            options={options1}></GoogleChartReact>
        </div>

        <div>
          <GoogleChartReact
            bootstrapURLKeys={{ key: API_KEY.key }}
            chartType="PieChart"
            height="150px"
            width="150px"
            data={[
              ['Gender', 'Orders'],
              ['여성', 520],
              ['남성', 480],
            ]}
            options={options2}></GoogleChartReact>
          <div className="legend">
            <div className="legend-sub">
              <div className="bg_color1"></div>
              <p className="legend-text">남성</p>
            </div>
            <div className="legend-sub">
              <div className="bg_color2"></div>
              <p className="legend-text">여성</p>
            </div>
          </div>
        </div>
      </div>
    </StyledChart>
  )
}

export default Chart
