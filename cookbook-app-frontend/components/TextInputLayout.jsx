import React from 'react';

import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

class TextFieldFirstExample extends React.Component {

    render() {
        return (
            <div>
                <TextField floatingLabelText={this.props.placeholder}}/>
            </div>
        );
    }
}

export default TextFieldFirstExample;
