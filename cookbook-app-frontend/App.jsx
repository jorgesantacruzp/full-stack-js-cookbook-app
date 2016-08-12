import React from 'react';
import BookList from './model-list/BookList.jsx';

class App extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            empleados: []
        }
    }
    componentWillMount() {
        fetch('https://api.github.com/users/mralexgray/repos').then((response) => {
            return response.json()
        }).then((empleados) => {
            this.setState({empleados: empleados})
        })
    }
    render() {
        if (this.state.empleados.length > 0) {
            return (
                <div>
                    <BookList listado={this.state.empleados}/>
                </div>
            )
        } else {
            return <p>Cargando empleados</p>
        }

    }

}

export default App;
