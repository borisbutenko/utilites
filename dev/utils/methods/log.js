'use strict';

/**
 * Сокращение вызова console.log
 * на log
 */

(function(log) { window.log = log; })(console.log);