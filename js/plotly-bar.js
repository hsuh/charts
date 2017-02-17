(function(window) {
    window.getData("/data/barchart.json").then(function(response) {

        var categories = window.uniq(response.map(function(obj) { return obj["Channel"]; }));
        var rr = response.map(window.getValueForObjName('response revenue')).filter(window.filterUndefined);
        var r = response.map(window.getValueForObjName('response')).filter(window.filterUndefined);
        var cost = response.map(window.getValueForObjName('cost')).filter(window.filterUndefined);

        var trace1 = {
            x: categories,
            y: rr,
            name: "Response revenue",
            type: "scatter"
        };
        var trace2 = {
            x: categories,
            y: r,
            name: "Response",
            type: "scatter"
        }
        var trace3 = {
            x: categories,
            y: cost,
            name: "Cost",
            type: "bar",
            yaxis: "y2"
        }
        var data = [trace1, trace2, trace3];
        var layout = {
            barmode: 'group',
            yaxis: { title: 'value' },
            yaxis2: {
                title: 'cost',
                overlaying: 'y',
                side: 'right'
            }
        };
        Plotly.newPlot('plotly-bar', data, layout);
    })
})(window)