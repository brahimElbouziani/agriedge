var  light = [] ;
var firebase = new Firebase("agriedge-400ec.firebaseio.com/");
firebase.on('value', function(snapshot) {
   
    
   for(let i in snapshot.val().light){
     light.push(snapshot.val().light[i]);
   } 
   
   
  light = light.slice(light.length- 20, light.length);
//  light.forEach((o, i, a) => a[i] = o*100/1024);
 
  drawGraph( light);
});

function drawGraph(  light ){

  var labels = [ 00,02,04,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40];
  var ctx = document.getElementById("myChart").getContext('2d');
  var myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: labels,
    datasets: [   
                 {
            label: "%  humidité chaque 2 min",
           labelString : "humidité",

    borderColor: 'rgb(145, 178, 253)',
    backgroundColor: 'rgb(145, 227, 254)',
    fill: false,
    data: light,
      yAxisID: "y-axis-temp",         
               
  } ]
  },
            options: {
                responsive: true,
              maintainAspectRatio: false,
              hoverMode: 'index',
                stacked: false,
                title:{
                    display: true,
                    text:'sensor 1'
                },

                scales: {
                    yAxes: [{
                        type: "linear", 
                        display: true,
                        position: "left",
                        id: "y-axis-temp",
                        ticks: {
                          beginAtZero:true,
                          suggestedMax: 100
                        }
              
                    }],
                }
            }
});
  myChart.update();
}