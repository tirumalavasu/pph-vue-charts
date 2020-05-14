export const planetChartData = {
  type: 'doughnut',
  data: {
    labels: ['Mercury', 'Venus', 'Earth', 'Mars'],
    datasets: [{
      data: [19, 26, 11, 44],
      backgroundColor: [
        '#3498db', // Blue
        '#f39c12',
        '#e74c3c',
        '#9b59b6',
      ]
  }]
  },
  options: {
    responsive: true,
    lineTension: 1,
    scales: {}
  }
}

export default planetChartData;