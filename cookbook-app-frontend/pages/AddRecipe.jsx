import React from 'react';
import TextInputLayout from '../components/TextInputLayout.jsx';
import CustomSelectField from '../components/CustomSelectField.jsx';
import RaisedButton from 'material-ui/RaisedButton';
import {Link} from 'react-router';

export default class AddRecipe extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            categories: []
        }
    }

    componentWillMount() {
        fetch('http://localhost:3000/cookbook/categories').then((response) => {
            return response.json()
        }).then((categories) => {
            this.setState({
                categories: categories.data
            })
        })
    }

    render() {
        return (
            <div>
                <TextInputLayout placeholder="Recipe's name"/>
                <TextInputLayout placeholder="Chef's name"/>
                <TextInputLayout placeholder="Description" multiLine={true} rows={2}/>
                <CustomSelectField categories={this.state.categories}/>
                <RaisedButton label="Back"
                containerElement={<Link to="" />}/>
                <RaisedButton label="Save"/>
            </div>
        )
    }
}
