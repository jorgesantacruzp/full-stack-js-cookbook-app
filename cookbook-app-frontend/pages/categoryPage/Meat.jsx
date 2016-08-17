import React from 'react';
import CustomTable from '../../components/CustomTable.jsx';

export default class Meat extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: [],
            title: "List of meat"
        };
    }

    componentWillMount() {
        fetch('http://localhost:3000/cookbook/recipes?category=Meat').then((response) => {
            return response.json()
        }).then((meat) => {
            this.setState({
                data: meat
            })
        })
    }

    render() {
        return (
            <div>
                <CustomTable title={this.state.title} tableData={this.state.data}/>
            </div>
        );
    }
}
