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
  var labels = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19];
  var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: labels,
    datasets: [   
                 {
            label: "humidité",
           labelString : "humidité",

    borderColor: 'rgb(145, 70, 65)',
    backgroundColor: 'rgb(145, 70, 65)',
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
                          suggestedMax: 1500
                        }
              
                    }],
                }
            }
});
}