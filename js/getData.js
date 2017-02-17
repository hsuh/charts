(function(window) {
    window.getData = function getData(url) {
        return $.ajax({
            url: url,
            async: false,
            datatype: 'json',
            success: function(response) {
                return response;
            }
        })
    }
})(window);