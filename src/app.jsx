console.log('App.js is running!');

var template = (
    <div>
        <h1>Nathan Harman</h1>
        <p>Age: 28</p>
        <p>Location: Phoenix</p>
    </div>);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);