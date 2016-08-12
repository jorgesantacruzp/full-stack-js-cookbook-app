import React from 'react'
import BookRow from '../model-row/BookRow.jsx'

class BookList extends React.Component {

  render() {
    return (
      <div className="container-fluid">
        <ul className="media-list">
          {
            this.props.listado.map((book, i) => {
              return <BookRow key={i} id={ book.id }
                                  name={ book.name }
                                  full_name={ book.full_name } />
            })
          }
        </ul>
      </div>
    )
  }
}

export default BookList
