'use strict';

whenReady(() => {
    loop(new Array(10000), (item, i) => {
        console.log(item, i);
    });
});