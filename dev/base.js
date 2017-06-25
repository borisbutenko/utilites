'use strict';

whenReady(() => {
    let body = document.body,
        button = document.getElementById('button'),
        button3 = document.getElementById('button3');

    button.on('click', click);

    button.click();

    button.off('click', click);

    button.click();

    body.delegate('click', '#button3', click);

    button3.click();

    function click(e) {
        console.log(arguments);
        log('click');
    }
});