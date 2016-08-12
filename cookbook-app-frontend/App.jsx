import React from 'react';
import CategoryList from './model-list/CategoryList.jsx';

import TextFieldFirstExample from './components/TextFieldFirstExample.jsx'

//import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
//injectTapEventPlugin();

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
                    <TextFieldFirstExample/>
                    <CategoryList listado={this.state.categories}/>
                </div>
            )
        } else {
            return <p>Cargando empleados</p>
        }

    }

}

export default App;
