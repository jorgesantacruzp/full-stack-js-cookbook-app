import React from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const styles = {
  customWidth: {
    width: 150,
  },
  floatingLabelStyle: {
    color: '#ffffff',
  },
};

export default class CustomSelectField extends React.Component {

  constructor(props) {
    super(props);
    this.state = {value: -1};
  }

  handleChange = (event, index, value) => this.setState({value});

  render() {
    return (
      <div>
        <SelectField value={this.state.value} onChange={this.handleChange}
        floatingLabelStyle={styles.floatingLabelStyle}>
          <MenuItem value={-1} primaryText="Choose one category" />
          {
            this.props.categories.map((category, i) => {
              return  <MenuItem
                        key={i}
                        value={category.id}
                        >{category.name}</MenuItem>
            })
          }
        </SelectField>
      </div>
    );
  }
}
