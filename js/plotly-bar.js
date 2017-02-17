(function(window) {
    window.getData("http://localhost:8002/data/barchart.json").then(function(response) {
        function getValueForObjName(name) {
            return function(obj) {
                if (obj.name == name) {
                    return obj.value
                }
            }
        }
        var categories = response.map(function(obj) { return obj["nonaggkey"]; });
        var rr = response.map(getValueForObjName('response revenue')).filter(Boolean);
        var r = response.map(getValueForObjName('response')).filter(Boolean);
        var cost = response.map(getValueForObjName('cost')).filter(Boolean);

        var trace1 = {
            x: categories,
            y: rr,
            name: "Response revenue",
            type: "bar"
        };
        var trace2 = {
            x: categories,
            y: r,
            name: "Response",
            type: "bar"
        }
        var trace3 = {
            x: categories,
            y: cost,
            name: "Cost",
            type: "bar"
        }
        var data = [trace1, trace2, trace3];
        var layout = { barmode: 'group' };
        Plotly.newPlot('plotly-bar', data, layout);
    })
})(window)