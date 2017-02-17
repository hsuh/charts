(function(window) {
    window.getData("http://localhost:8002/data/heatmap.json").then(function(response) {
        Highcharts.chart('container', {
            colorAxis: {
                stops: [
                    [0, '#ff0000'], //red
                    [0.002, '#ffff00'], //yellow
                    [1, '#00ff00'] //green
                ],
                //maxColor: Highcharts.getOptions().colors[1],
                //type: 'logarithmic'
            },
            series: [{
                type: 'treemap',
                layoutAlgorithm: 'squarified',

                data: response
            }],
            title: {
                text: 'Highcharts Heatmap'
            }
        });
    });
})(window)