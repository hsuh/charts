(function(window) {
    window.getData("/data/plotly-heatmap.json").then(function(response) {
        Plotly.newPlot('myDiv', response);
    })
})(window)