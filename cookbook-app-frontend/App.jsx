import React from 'react';
import CategoryList from './model-list/CategoryList.jsx';

class App extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            categories: []
        }
    }
    componentWillMount() {
        fetch('http://localhost:8000/api/categories').then((response) => {
            return response.json()
        }).then((categories) => {
            this.setState({categories: categories.data})
        })
    }
    render() {
        if (this.state.categories.length > 0) {
            return (
                <div>
                    <CategoryList listado={this.state.categories}/>
                </div>
            )
        } else {
            return <p>Cargando empleados</p>
        }

    }

}

export default App;
