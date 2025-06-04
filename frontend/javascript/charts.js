const x = [50,60,70,80,90,100,110,120,130,140,150];
const y = [7,8,8,9,9,9,10,11,14,14,15];

//chartShow(x, y);

export function chartShow(xValues, yValues) {
  new Chart("chartLift", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{
      fill: false,
      lineTension: 0,
      backgroundColor:"rgba(0,0,255,1.0)",
      borderColor: "rgba(0,0,255,0.1)",
      data: yValues
    }]
  },
  options:{legend: {display: false},
    scales: {
      yAxes: [{ticks: {min: 6, max:16}}],
    }}
});
}
