import React from 'react'
import bookImage from '../images/whitebook.jpg'
const Book = ({ book }) => {
 
  return (
   
    <div className="book">
      <div className="author">
      {book.author} 
      </div>
      <img alt="book" src={bookImage}></img>
   <div className="title">
      {book.title} 
      </div>
<div className="description">
      {book.description}
</div>
      </div>

  )
}

export default Book