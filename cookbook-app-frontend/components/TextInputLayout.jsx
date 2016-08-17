import React from 'react';

import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

const styles = {
  underlineStyle: {
    borderColor: '#ffffff',
  },
  floatingLabelStyle: {
    color: '#ffffff',
  },
  floatingLabelFocusStyle: {
    color: '#ffffff',
  }
};

class TextInputLayout extends React.Component {

    render() {
        return (
            <div>
                <TextField floatingLabelText={this.props.placeholder}
                underlineFocusStyle={styles.underlineStyle}
                floatingLabelStyle={styles.floatingLabelStyle}
                floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                multiLine={this.props.multiLine}
                rows={this.props.rows}/>
            </div>
        );
    }
}

export default TextInputLayout;
