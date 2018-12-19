'use strict';

console.log('App.js is running!');

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Nathan Harman'
    ),
    React.createElement(
        'p',
        null,
        'Age: 28'
    ),
    React.createElement(
        'p',
        null,
        'Location: Phoenix'
    )
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
