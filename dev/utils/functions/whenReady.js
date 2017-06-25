'use strict';

window.whenReady = (function() {
    let funcs = [],
        ready = false;

    function handler(e) {
        if (ready) return;
        if (e.type === 'readystatechange' &&
            document.readyState !== 'complete') return;

        for (let i = 0; i < funcs.length; i++) funcs[i].call(document);

        ready = true;
        funcs = null;
    }

    document.on('DOMContentLoaded', handler);
    document.on('readystatechange', handler);
    // window.on('load', handler);

    return function whenReady(func) {
        if (ready) func.call(document);
        else funcs.push(func);
    }
})();