export function chartShow(xValues, yValues, legendValues) {
  var yMin = Math.min(...yValues);
  var yMax = Math.max(...yValues);
  yMin = Math.ceil(yMin * 0.5/10) * 10;
  yMax = Math.ceil(yMax * 1.5/10) * 10;
  yValues.unshift(0);
  xValues.unshift(0);

  console.log("xValues: " + xValues);
  console.log("yValues: " + yValues);
  console.log("legendValues: " + legendValues);

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
  options:{
    legend: {display: false},
    scales: {yAxes: [{ticks: {min: yMin, max:yMax}}],}
  }
});
}
