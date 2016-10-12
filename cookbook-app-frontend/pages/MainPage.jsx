import React from 'react';

//import CustomGridList from '../components/GridList.jsx';
//import CustomAppBar from '../components/CustomAppBar.jsx';

import CustomGridList from 'cookbook-app-react-components/transpiledComponents/GridList';
import CustomAppBar from 'cookbook-app-react-components/transpiledComponents/CustomAppBar';

class MainPage extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            categories: [
                {
                    "id": 1,
                    "name": "Desserts",
                    "img": '../images/grid-list/desserts.jpg'
                },
                {
                    "id": 2,
                    "name": "Meat",
                    "img": '../images/grid-list/meat.jpg'
                },
                {
                    "id": 3,
                    "name": "Pastas",
                    "img": '../images/grid-list/pastas.jpg'
                },
                {
                    "id": 4,
                    "name": "Saladas",
                    "img": '../images/grid-list/salads.jpg'
                }
            ],
            appTitle: "Avantica's Cookbook",
            gridTitle: "Categories",
            open: false,
            menuOptions: [
                {
                    "action": "Add",
                    "message": "You're gonna add",
                    "path": "add"
                }, {
                    "action": "About",
                    "message": "You're gonna about",
                    "path": "about"
                }
            ]
        }
    }

    /*componentWillMount() {
        const addPathImage = array => array.map(item => {
            return {
                ...item,
                img: '../images/grid-list/' + item.name.toLowerCase() + '.jpg'
            }
        });

        fetch('http://localhost:3000/cookbook/categories').then((response) => {
            return response.json()
        }).then((categories) => {
            this.setState({
                categories: addPathImage(categories.data)
            })
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

export default MainPage;
