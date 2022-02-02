import React from 'react'

const Book = ({ book }) => {
 
  return (
   
    <div>
      {book.author} 
      <br></br>
      {book.title} 
     
      </div>

  )
}

export default Book