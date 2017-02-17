(function(window) {
    window.getData("/data/barchart.json").then(function(response) {

        var rr = response.map(window.getValueForObjName('response revenue')).filter(window.filterUndefined);
        var r = response.map(window.getValueForObjName('response')).filter(window.filterUndefined);
        var cost = response.map(window.getValueForObjName('cost')).filter(window.filterUndefined);

        Highcharts.chart('highchart-bar', {
            chart: {
                type: 'column'
            },
            title: {
                text: 'Highchart bar'
            },
            xAxis: {
                categories: window.uniq(response.map(function(obj) { return obj["Channel"]; }))
            },
            plotOptions: {
                column: {
                    pointPadding: 0.2,
                    borderWidth: 0
                }
            },
            yAxis: [{
                    labels: {
                        format: '{value}',
                        style: { color: Highcharts.getOptions().colors[1] }
                    },
                    title: {
                        text: 'Value',
                        style: { color: Highcharts.getOptions().colors[1] }
                    }
                },
                {
                    title: {
                        text: 'Cost',
                        style: { color: Highcharts.getOptions().colors[0] }
                    },
                    labels: {
                        format: '${value}',
                        style: {
                            color: Highcharts.getOptions().colors[0]
                        }
                    },
                    opposite: true
                }
            ],
            series: [{
                    name: 'Response revenue',
                    data: rr,
                    type: 'line'
                }, {
                    name: 'Response',
                    data: r,
                    type: 'line'
                }, {
                    name: 'Cost',
                    data: cost,
                    type: 'column',
                    yAxis: 1
                }

            ]
        })
    })
})(window);