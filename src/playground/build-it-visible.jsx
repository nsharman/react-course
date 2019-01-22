console.log('App.js is running!');

const app = {
    title: 'Visibility Toggle',
    details: 'These are the details.'
};

let visible = false;

const onToggle = () => {
    visible = !visible;

    render();
}

const appRoot = document.getElementById('app');

const render = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            <button onClick={onToggle}>
                {visible ? 'Hide details' : 'Show details'}
            </button>
        {visible && <p>{app.details}</p>}
        </div>
    );
    
    ReactDOM.render(template, appRoot);
};

render();