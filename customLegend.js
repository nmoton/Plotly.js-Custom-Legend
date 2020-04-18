var trace1 = {
  name: 'Trend 1',
  x: [0, 1, 2, 3, 4, 5, 6, 7, 8],
  y: [0, 3, 6, 4, 5, 2, 3, 5, 4],
  mode: 'lines+markers',
  line: {
    color: 'rgb(200, 0, 0)'
  },
  visible: true,
};
var trace2 = {
  name: 'Trend 2',
  x: [0, 1, 2, 3, 4, 5, 6, 7, 8],
  y: [0, 4, 7, 8, 3, 6, 3, 3, 4],
  mode: 'lines+markers',
  line: {
    color: 'rgb(0, 128, 0)'
  },
  visible: false,
};
  var trace3 = {
  name: 'Trend 3',
  x: [0, 1, 2, 3, 4, 5, 6, 7, 8],
  y: [0, 2, 4, 6, 8, 10, 8, 6, 4],
  mode: 'lines+markers',
  line: {
    color: 'rgb(0, 0, 128)'
  },
  visible: false,
}

var data = [trace1, trace2, trace3];

var layout = {showlegend: false,
             xaxis: {
               range: [0, 10]
             },
             yaxis: {
               range: [0, 12]
             }};

Plotly.newPlot('myDiv', data, layout);

// Add the trace names to the legend
document.getElementById("trace1-label").textContent=trace1.name + ' (Red)';
document.getElementById("trace2-label").textContent=trace2.name + ' (Green)';
document.getElementById("trace3-label").textContent=trace3.name + ' (Blue)';

// If a box is unchecked, don't show the trace
document.getElementById("trace1-check").addEventListener('change', (event) => {
  if (event.target.checked) {
    trace1.visible = true;
  } else {
    trace1.visible = false;
  }
  Plotly.redraw(myDiv);
})

document.getElementById("trace2-check").addEventListener('change', (event) => {
  if (event.target.checked) {
    trace2.visible = true;
  } else {
    trace2.visible = false;
  }
  Plotly.redraw(myDiv);
})

document.getElementById("trace3-check").addEventListener('change', (event) => {
  if (event.target.checked) {
    trace3.visible = true;
  } else {
    trace3.visible = false;
  }
  Plotly.redraw(myDiv);
})