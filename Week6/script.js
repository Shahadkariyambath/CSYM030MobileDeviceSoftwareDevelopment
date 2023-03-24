function myLoadFunction() {
    const ctx = document.getElementById('myChart').getContext('2d');
    var myChartCOnfig ={
        type: 'bar',
        data: {
          labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
          datasets: [{
            label: '# of Votes',
            data: [10, 19, 8, 9, 2, 3],
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
    }

    const myChart  = new Chart(ctx, myChartCOnfig) ;
}

document.addEventListener('DOMContentLoaded',myLoadFunction)