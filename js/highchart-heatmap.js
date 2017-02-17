(function(window) {
    window.getData("/data/heatmap.json").then(function(response) {
        Highcharts.chart('container', {
            colorAxis: {
                stops: [
                    [0, '#00ff00'], //green
                    [0.05, '#ffff00'], //yellow
                    [1, '#ff0000'] //red
                ],
                lineColor: "#c4cad3"
                    //maxColor: Highcharts.getOptions().colors[1],
                    //type: 'logarithmic'
            },
            tooltip: {
                formatter: function() {
                    return 'Cost: ' + this.point.value + '<br>' +
                        'Cost per response: ' + this.point.colorValue;
                }
            },
            series: [{
                type: 'treemap',
                layoutAlgorithm: 'squarified',

                data: response,
                dataLabels: {
                    color: '#000000',
                    shadow: false,
                    style: { fontWeight: 'normal' }
                }
            }],
            title: {
                text: 'Highcharts Heatmap'
            }
        });

    });
})(window)