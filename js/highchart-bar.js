(function(window) {
    window.getData("http://localhost:8002/data/barchart.json").then(function(response) {
        function getValueForObjName(name) {
            return function(obj) {
                if (obj.name == name) {
                    return obj.value
                }
            }
        }
        var rr = response.map(getValueForObjName('response revenue')).filter(Boolean);
        var r = response.map(getValueForObjName('response')).filter(Boolean);
        var cost = response.map(getValueForObjName('cost')).filter(Boolean);

        Highcharts.chart('highchart-bar', {
            chart: {
                type: 'column'
            },
            title: {
                text: 'Highchart bar'
            },
            xAxis: {
                categories: response.map(function(obj) { return obj["nonaggkey"]; })
            },
            plotOptions: {
                column: {
                    pointPadding: 0.2,
                    borderWidth: 0
                }
            },
            series: [{
                    name: 'repsone revenue',
                    data: rr
                }, {
                    name: 'response',
                    data: r

                }, {
                    name: 'cost',
                    data: cost

                }

            ]
        })
    })
})(window);