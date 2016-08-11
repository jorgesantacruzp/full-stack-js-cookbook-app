import React from 'react';
import Table from './Table.jsx';

class App extends React.Component {
    render() {
        var i = 1;

        var myStyle = {
            fontSize: 100,
            color: '#FF0000'
        }

        return (
            <div>
                <Header/>
                <Content/>
                <p>This is the content!!!</p>
                <h1>{1 + 1}</h1>
                <h1>{i == 1
                        ? 'True!'
                        : 'False'}</h1>
                <h1 style={myStyle}>Header</h1>
                {/*a comment here*/}
                <Table/>
            </div>
        );
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>Header</h1>
            </div>
        );
    }
}

class Content extends React.Component {
    render() {
        return (
            <div>
                <h2>Content</h2>
                <p>The content text!!!</p>
            </div>
        );
    }
}

export default App;
