import React from 'react';

import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

class TextFieldFirstExample extends React.Component {

    getChildContext() {
        return {muiTheme: getMuiTheme(baseTheme)};
    }

    render() {
        return (
            <div>
                <TextField floatingLabelText="Material UI example"/>

                <FlatButton primary={true} label="Choose an Image">
                    <input type="file" id="imageButton"></input>
                </FlatButton>
            </div>
        );
    }
}

TextFieldFirstExample.childContextTypes = {
    muiTheme: React.PropTypes.object.isRequired
};

export default TextFieldFirstExample;
