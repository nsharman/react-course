console.log('App.js is running!');

// var template = <p>This is JSX from App.js!</p>;
var template = React.createElement(
    "h1",
    { id: "someid" },
    "Somthing new"
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);