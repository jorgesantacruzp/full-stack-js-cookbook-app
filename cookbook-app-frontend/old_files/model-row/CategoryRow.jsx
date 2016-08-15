import React from 'react'

class CategoryRow extends React.Component {

  render() {
    return(
      <li className="media">
        <div className="media-body">
          <h4>{this.props.id}</h4>
          <a href="">
            {this.props.name} &nbsp;
          </a>
        </div>
        <hr/>
      </li>
    )
  }
}

export default CategoryRow
