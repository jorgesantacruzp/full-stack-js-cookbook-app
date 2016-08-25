import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import Search from 'material-ui/svg-icons/action/search';
import {Link} from 'react-router';

class CustomGridList extends React.Component {
    render() {
        return (
            <div className="root">
                <GridList cellHeight={200} className="gridList">
                    <Subheader className="subHeaderSize">{this.props.title}</Subheader>
                    {this.props.listado.map((tile) => (
                        <GridTile key={tile.id} title={tile.name} actionIcon={< IconButton containerElement = { < Link to = {
                                tile.name.toLowerCase()
                            } />
                        } > <Search color="white"/> < /IconButton>}>
                            <img src={tile.img}/>
                        </GridTile>
                    ))}
                </GridList>
            </div>
        );
    }
}

export default CustomGridList;
