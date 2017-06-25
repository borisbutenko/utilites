(function(array, nodeList) {
    if (!array.prototype.forEach || !nodeList.prototype.forEach) {
        array.prototype.forEach = nodeList.prototype.forEach = function(callback, thisArg) {
            if (this === null) throw new TypeError(' this is null or not defined');
            if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function');

            let T,
                k = 0,
                O = Object(this),
                len = O.length >>> 0;

            if (arguments.length > 1) T = thisArg;

            while (k < len) {
                let kValue;
                if (k in O) {
                    kValue = O[k];
                    callback.call(T, kValue, k, O);
                }
                k++;
            }
        }
    }
})(Array, NodeList);