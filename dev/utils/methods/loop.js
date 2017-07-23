'use strict';

/**
 * Супер-производительный перебор
 * @param array[]
 * @param callback()
 * @return callback(item, index)
 */

(function(w) {

    w.loop = function(array, callback) {
        let i = array.length;
        while(i -= 1) {
            callback(array[i], i);
        }
    };

})(window);