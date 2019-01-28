class VisibilityToggle extends React.Component {

    constructor(props) {
        super(props);

        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);

        this.state = {
            title: 'Visibility Toggle',
            details: 'These are the details',
            visible: false
        };
    }

    handleToggleVisibility() {
        this.setState((prevState) => {
            return {
                visible: !prevState.visible
            };
        });
    }

    render() {
        return (
            <div>
                <h1>{this.state.title}</h1>
                <button onClick={this.handleToggleVisibility}>
                    {this.state.visible ? 'Hide details' : 'Show details'}
                </button>
                {this.state.visible && <p>{this.state.details}</p>}
            </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));

// const app = {
//     title: 'Visibility Toggle',
//     details: 'These are the details.'
// };

// let visible = false;

// const onToggle = () => {
//     visible = !visible;

//     render();
// }

// const appRoot = document.getElementById('app');

// const render = () => {
//     const template = (
//         <div>
//             <h1>{app.title}</h1>
//             <button onClick={onToggle}>
//                 {visible ? 'Hide details' : 'Show details'}
//             </button>
//         {visible && <p>{app.details}</p>}
//         </div>
//     );
    
//     ReactDOM.render(template, appRoot);
// };

// render();