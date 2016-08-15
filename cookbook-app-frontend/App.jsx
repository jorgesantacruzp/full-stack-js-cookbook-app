import React from 'react';

import CustomGridList from './components/GridList.jsx'

class App extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            categories: [
                {
                    "id": 1,
                    "name": "Pastas",
                    "img": '../images/grid-list/pastas.jpg'
                }, {
                    "id": 2,
                    "name": "Salads",
                    "img": '../images/grid-list/salads.jpg'
                }, {
                    "id": 3,
                    "name": "Meat",
                    "img": '../images/grid-list/meat.jpg'
                }, {
                    "id": 4,
                    "name": "Desserts",
                    "img": '../images/grid-list/desserts.jpg'
                }
            ]
        }
    }
    /*componentWillMount() {
        fetch('http://localhost:8000/api/categories').then((response) => {
            return response.json()
        }).then((categories) => {
            this.setState({categories: categories.data})
        })
    }*/
    render() {
        if (this.state.categories.length > 0) {
            return (
                <div>
                    <CustomGridList listado={this.state.categories}/>
                </div>
            )
        } else {
            return <p>Cargando empleados</p>
        }

    }

}

export default App;
