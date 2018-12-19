console.log('App.js is running!');

var app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer.'
};

var template = (
    <div>
        <h1>{app.title}</h1>
        <p>{app.subtitle}</p>
        <ol>
            <li>Item 1</li>
            <li>Item 2</li>
        </ol>
    </div>
);

var user = {
    name: 'Nathan',
    age: 28,
    location: 'Phoenix'
};

var userName = 'Nathan';
var userAge = 28;
var userLocation = 'Phoenix';
var templateTwo = (
    <div>
        <h1>{user.name}</h1>
        <p>Age: {user.age}</p>
        <p>Location: {user.location}</p>
    </div>);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);