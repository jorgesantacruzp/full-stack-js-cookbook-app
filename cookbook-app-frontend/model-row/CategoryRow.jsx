import React from 'react'

class CategoryRow extends React.Component {

  render() {
    return(
      <li className="media">
        <div className="media-body">
          <h4>{this.props.id}</h4>
          <p>
            {this.props.name} &nbsp;
            <span className="label label-info">{this.props.full_name}</span>
          </p>
        </div>
        <hr/>
      </li>
    )
  }
}

export default CategoryRow
