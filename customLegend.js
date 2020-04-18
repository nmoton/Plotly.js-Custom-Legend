// Traces that will be plotted
var trace1 = {
  x: [0, 1, 2, 3, 4, 5, 6, 7, 8],
  y: [0, 3, 6, 4, 5, 2, 3, 5, 4],
  type: 'scatter'
};
var trace2 = {
  x: [0, 1, 2, 3, 4, 5, 6, 7, 8],
  y: [0, 4, 7, 8, 3, 6, 3, 3, 4],
  type: 'scatter'
};
  var trace3 = {
  x: [0, 1, 2, 3, 4, 5, 6, 7, 8],
  y: [0, 2, 4, 6, 8, 10, 8, 6, 4],
}

var data = [trace1, trace2, trace3];

// Hide the original legend and plot styling
var layout = {showlegend: false};

Plotly.newPlot('myDiv', data, layout);