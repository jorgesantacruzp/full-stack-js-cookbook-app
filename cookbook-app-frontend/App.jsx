import React from 'react';

import CustomGridList from './components/GridList.jsx';
import CustomAppBar from './components/CustomAppBar.jsx';

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
            ],
            appTitle: "Recipes",
            gridTitle: "Categories",
            open: false,
            menuOptions: [
                {
                    "action": "Add",
                    "message": "You're gonna add"
                }, {
                    "action": "Delete",
                    "message": "You're gonna delete"
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
    handleClick = () => this.setState({
        open: !this.state.open
    });
    handleClose = () => this.setState({open: false});

    render() {
        let styles = {
            appBarStyle: {
                backgroundColor: '#F44336'
            }
        };

        if (this.state.categories.length > 0) {
            return (
                <div>
                    <CustomAppBar title={this.state.appTitle} options={this.state.menuOptions}/>
                    <CustomGridList listado={this.state.categories} title={this.state.gridTitle}/>
                </div>
            )
        } else {
            return <p>Loading</p>
        }

    }

}

export default App;
