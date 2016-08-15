import React from 'react';

import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import Search from 'material-ui/svg-icons/action/search';

const styles = {
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around'
    },
    gridList: {
        width: 500,
        height: 500,
        overflowY: 'auto',
        marginBottom: 24
    },
    subHeaderSize:{
      fontSize: 40
    }
};

class CustomGridList extends React.Component {

    render() {
        return (
            <div style={styles.root}>
                <GridList cellHeight={200} style={styles.gridList}>
                    <Subheader style={styles.subHeaderSize}>Categories</Subheader>
                    {this.props.listado.map((tile) => (
                        <GridTile key={tile.id} title={tile.name}
                            actionIcon={
                              < IconButton >
                              <Search color="white"/>
                              < /IconButton>
                            }>
                            <img src={tile.img}/>
                        </GridTile>
                    ))}
                </GridList>
            </div>
        );
    }
}

export default CustomGridList;
