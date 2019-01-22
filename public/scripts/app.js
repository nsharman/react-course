'use strict';

console.log('App.js is running!');

var app = {
    title: 'Visibility Toggle',
    details: 'These are the details.'
};

var visible = false;

var onToggle = function onToggle() {
    visible = !visible;

    render();
};

var appRoot = document.getElementById('app');

var render = function render() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            app.title
        ),
        React.createElement(
            'button',
            { onClick: onToggle },
            visible ? 'Hide details' : 'Show details'
        ),
        visible && React.createElement(
            'p',
            null,
            app.details
        )
    );

    ReactDOM.render(template, appRoot);
};

render();
