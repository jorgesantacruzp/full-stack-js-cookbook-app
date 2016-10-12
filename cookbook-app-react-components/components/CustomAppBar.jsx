import React from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import {Link} from 'react-router';

class CustomAppBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false
        };
    }

    handleClick = () => this.setState({
        open: !this.state.open
    });
    handleClose = () => {
      this.setState({open: false});
    };

    render() {
        let styles = {
            appBarStyle: {
                backgroundColor: '#F44336'
            }
        };
        return (
            <div>
                <AppBar title={this.props.title}
                iconClassNameRight="muidocs-icon-navigation-expand-more"
                style={styles.appBarStyle}
                onLeftIconButtonTouchTap={this.handleClick}/>
                <Drawer
                docked={false}
                width={200} open={this.state.open}
                onRequestChange={(open) => this.setState({open})}>
                    {
                      this.props.options.map((option, i) => {
                        return  <MenuItem
                                  key={i}
                                  onTouchTap={this.handleClose}
                                  containerElement={<Link to={option.path} />}
                                  >{option.action}</MenuItem>
                      })
                    }
                </Drawer>
            </div>
        );
    }
}

export default CustomAppBar;
