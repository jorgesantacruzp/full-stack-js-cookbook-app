import React from 'react'
import CategoryRow from '../model-row/CategoryRow.jsx'

class CategoryList extends React.Component {

  render() {
    return (
      <div className="container-fluid">
        <ul className="media-list">
          {
            this.props.listado.map((book, i) => {
              return <CategoryRow key={i} id={ book.id }
                                  name={ book.name }/>
            })
          }
        </ul>
      </div>
    )
  }
}

export default CategoryList
