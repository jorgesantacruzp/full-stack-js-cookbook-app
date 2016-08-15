import React from 'react';
import FlatButton from 'material-ui/FlatButton';

class UploadComponent extends React.Component {

    render() {
        let styles = {
            exampleImageInput: {
                cursor: 'pointer',
                position: 'absolute',
                top: '0',
                bottom: '0',
                right: '0',
                left: '0',
                width: '100%',
                opacity: '0'
            }
        }
        return (
            <div>
                <FlatButton label="Choose an Image" primary={true}>
                    <input id="imageButton" style={styles.exampleImageInput} type="file"></input>
                </FlatButton>
            </div>
        );
    }
}

export default UploadComponent;
