




//chart: (https://www.chartjs.org/samples/latest/ , )
function buildChart() {
  var ctx = document.getElementById('myChart').getContext('2d');
          var myChart = new Chart(ctx, {
              type: 'bar',
              data: {
                  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                  datasets: [{
                      label: '# of Votes',
                      data: [12, 19, 3, 5, 2, 3],
                      backgroundColor: [
                          'rgba(255, 99, 132, 0.2)',
                          'rgba(54, 162, 235, 0.2)',
                          'rgba(255, 206, 86, 0.2)',
                          'rgba(75, 192, 192, 0.2)',
                          'rgba(153, 102, 255, 0.2)',
                          'rgba(255, 159, 64, 0.2)'
                      ],
                      borderColor: [
                          'rgba(255, 99, 132, 1)',
                          'rgba(54, 162, 235, 1)',
                          'rgba(255, 206, 86, 1)',
                          'rgba(75, 192, 192, 1)',
                          'rgba(153, 102, 255, 1)',
                          'rgba(255, 159, 64, 1)'
                      ],
                      borderWidth: 1
                  }]
              },
              options: {
                  scales: {
                      yAxes: [{
                          ticks: {
                              beginAtZero: true
                          }
                      }]
                  }
              }
          });
}

function buildChart2() { 
  var myLineChart = new Chart(ctx).Line(data);
  var data = {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [
          {fillColor: "rgba(220,220,220,0.2)",
           strokeColor: "rgba(220,220,220,1)",
           data: [65, 59, 80, 81, 56, 55, 40]
          },
          {fillColor: "rgba(151,187,205,0.2)",
           strokeColor: "rgba(151,187,205,1)",
           data: [28, 48, 40, 19, 86, 27, 90]
          }
      ]};

      lineChartData = {}; //declare an object
lineChartData.labels = []; //add 'labels' element to object (X axis)
lineChartData.datasets = []; //add 'datasets' array element to object

for (line = 0; line < 4; line++) {
    y = [];
    lineChartData.datasets.push({}); //create a new line dataset
    dataset = lineChartData.datasets[line]
    dataset.fillColor = "rgba(0,0,0,0)";
    dataset.strokeColor = "rgba(200,200,200,1)";
    dataset.data = []; //contains the 'Y; axis data

    for (x = 0; x < 10; x++) {
        y.push(line + x); //push some data aka generate 4 distinct separate lines
        if (line === 0)
            lineChartData.labels.push(x); //adds x axis labels
    } //for x

    lineChartData.datasets[line].data = y; //send new line data to dataset
} //for line

ctx = document.getElementById("myChart").getContext("2d");
myLineChart = new Chart(ctx).Line(lineChartData);

}

function buildChart3() {
  //https://codepen.io/k3no/pen/pbYGVa
  // http://mintrud.gov.by/ru/infa2
  // https://www.nbrb.by/Statistics/rates/Graphic

  var canvas = document.getElementById("myChart");
var ctx = canvas.getContext('2d');

// Global Options:
Chart.defaults.global.defaultFontColor = 'black';
Chart.defaults.global.defaultFontSize = 16;

var data = {
  labels: ["Jan-2019", "Feb-2019", "Mar-2019", "Apr-2019", "May-2019", "Jun-2019", "Jul-2019", "Aug-2019", "Sep-2019", "Oct-2019", "Nov-2019", "Dec-2019","Jan-2020", "Feb-2020", "Mar-2020"],
  datasets: [{
      label: "пенсия в USD",
      fill: false,
      lineTension: 0.1,
      backgroundColor: "rgba(225,0,0,0.4)",
      borderColor: "red", // The main line color
      borderCapStyle: 'square',
      borderDash: [], // try [5, 15] for instance
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: "black",
      pointBackgroundColor: "white",
      pointBorderWidth: 1,
      pointHoverRadius: 8,
      pointHoverBackgroundColor: "yellow",
      pointHoverBorderColor: "brown",
      pointHoverBorderWidth: 2,
      pointRadius: 4,
      pointHitRadius: 10,
      // notice the gap in the data and the spanGaps: true
      data: [177.0248, 176.2370, 178.5781, 179.4341, 192.0578, 193.5722, 197.9039, 211.5755, 206.6794, 209.6464, 210.6221, 204.0740, 204.1853, 198.0729, 183.3601],
      spanGaps: true,
    }, {
      label: "пенсия в BYN",
      fill: true,
      lineTension: 0.1,
      backgroundColor: "rgb(109, 196, 124)",
      borderColor: "rgb(167, 105, 0)",
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: "white",
      pointBackgroundColor: "black",
      pointBorderWidth: 1,
      pointHoverRadius: 8,
      pointHoverBackgroundColor: "brown",
      pointHoverBorderColor: "yellow",
      pointHoverBorderWidth: 2,
      pointRadius: 4,
      pointHitRadius: 10,
      // notice the gap in the data and the spanGaps: false
      data: [381.17, 381.80, 381.80, 381.80, 405.05, 405.05, 405.05, 432.27,432.27,432.27,431.67, 431.29,432.73,432.73,432.73],
      spanGaps: false,
    }

  ]
};

// Notice the scaleLabel at the same level as Ticks
var options = {
  scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                },
                scaleLabel: {
                     display: true,
                     labelString: 'Размер пенсии',
                     fontSize: 20 
                  }
            }]            
        }  
};

// Chart declaration:
var myBarChart = new Chart(ctx, {
  type: 'line',
  data: data,
  options: options
});
}