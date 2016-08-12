import React from 'react';
import Table from './Table.jsx';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            header: "Header from App state...",
            "content": "Content from App state..."
        }
    }

    render() {
        var i = 1;

        var myStyle = {
            color: '#FF0000'
        }

        return (
            <div>
                <Header extendedPropHeader={this.state.header}/>
                <Content extendedPropContent={this.state.content}/>
                <p>This is the content!!!</p>
                <h1>{1 + 1}</h1>
                <h1>{i == 1
                        ? 'True!'
                        : 'False'}</h1>
                <h1 style={myStyle}>Header</h1>
                {/*a comment here*/}
                <Table/> {/*state*/}
                <div>
                    <h1>{this.state.header}</h1>
                    <h2>{this.state.content}</h2>
                    <h2 style={myStyle}>{this.props.headerProp}</h2>
                    <h2>{this.props.defaultProp}</h2>
                </div>
            </div>
        );
    }
}

App.defaultProps = {
    defaultProp: "Message from default props..."
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.extendedPropHeader}</h1>
            </div>
        );
    }
}

class Content extends React.Component {
    render() {
        return (
            <div>
                <h2>{this.props.extendedPropContent}</h2>
            </div>
        );
    }
}

export default App;
