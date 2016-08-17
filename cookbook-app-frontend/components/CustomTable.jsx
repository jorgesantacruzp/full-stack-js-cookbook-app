import React from 'react';
import {
    Table,
    TableBody,
    TableFooter,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn
} from 'material-ui/Table';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import RaisedButton from 'material-ui/RaisedButton';
import {Link} from 'react-router';

const styles = {
    marginTop: 12,
    appBarStyle: {
      backgroundColor: '#ff685c'
    }
};

export default class CustomTable extends React.Component {

  constructor(props) {
      super(props);

      this.state = {
          stripedRows: false,
          showRowHover: false,
          selectable: true,
          multiSelectable: false,
          deselectOnClickaway: true,
          showCheckboxes: true
      };
  }

  render() {
      return (
          <div>
            <AppBar
              style={styles.appBarStyle}
              title={this.props.title}
              iconElementLeft={<IconButton containerElement={<Link to="" />}><NavigationClose /></IconButton>}
            />
            <Table
            style={styles}
            height={this.state.height}
            selectable={this.state.selectable}
            multiSelectable={this.state.multiSelectable}>
                <TableBody
                displayRowCheckbox={this.state.showCheckboxes}
                deselectOnClickaway={this.state.deselectOnClickaway}
                showRowHover={this.state.showRowHover}
                stripedRows={this.state.stripedRows}>
                    {this.props.tableData.map((row, index) => (
                        <TableRow key={index} selected={row.selected}>
                            <TableRowColumn>{row.name}</TableRowColumn>
                            <TableRowColumn>{row.chef}</TableRowColumn>
                            <TableRowColumn>{row.description}</TableRowColumn>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <RaisedButton label="Home" fullWidth={true}
            style={styles}
            containerElement={<Link to="" />}/>
          </div>
      );
  }
}
