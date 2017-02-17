(function(window) {
    window.getData("http://localhost:8002/data/plotly-heatmap.json").then(function(response) {
        Plotly.newPlot('myDiv', response);
    })
})(window)