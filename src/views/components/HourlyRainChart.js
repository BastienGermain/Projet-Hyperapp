import { h } from 'hyperapp'
import Chart from 'chart.js';

const HourlyRainChart = (props) => {

  return (
    <div class="chart-container">
      <canvas
        oncreate={element => {
          var myChart = new Chart(element.id, {
            type: 'line',
            data: {
              labels: ['1h', '2h', '3h', '4h', '5h', '6h', '7h', '8h', '9h', '10h', '11h', '12h'], // Labels of time
              datasets: [{
                label: '',
                data: props.hourlyData,
                backgroundColor: 'rgba(255, 255, 255, 0)',
                borderColor: '#043b57',
                fill: false
              }]
            },
            options: {
              scales: {
                yAxes: [{
                  ticks: {
                    beginAtZero: true
                  }
                }]
              },
              legend: {
                display: false,
                labels: {
                  fontColor: '#043b57'
                }
              }
            }
          });
        }}
        id='hourlyRainChart'
        >
      </canvas>
    </div>
  )
}

export default HourlyRainChart
