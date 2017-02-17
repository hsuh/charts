(function(window) {
    window.filterUndefined = function(item) {
        if (item !== undefined) return item;
    }

    window.getValueForObjName = function(name) {
        return function(obj) {
            if (obj.name == name) {
                return obj.value
            }
        }
    }

    window.uniq = function(a) {
        return a.sort().filter(function(item, pos, ary) {
            return !pos || item != ary[pos - 1];
        })
    }
})(window)