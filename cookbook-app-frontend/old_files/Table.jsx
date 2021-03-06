import React from 'react';

class Table extends React.Component {
    constructor() {
        super();

        this.state = {
            data: [
                {
                    "id": 1,
                    "name": "Foo",
                    "age": "20"
                }, {
                    "id": 2,
                    "name": "Bar",
                    "age": "30"
                }, {
                    "id": 3,
                    "name": "Baz",
                    "age": "40"
                }
            ]
        }
    }

    render() {
        return (
            <table>
                <tbody>
                    {/*key={i} helps React to update only necessary elements instead
                    of re-rendering entire list when something change*/}
                    {this.state.data.map((person, i) => <TableRow key={i} data={person}/>)}
                </tbody>
            </table>
        );
    }
}

class TableRow extends React.Component {
    render() {
        return (
            <tr>
                <td>{this.props.data.id}</td>
                <td>{this.props.data.name}</td>
                <td>{this.props.data.age}</td>
            </tr>
        );
    }
}

export default Table;
