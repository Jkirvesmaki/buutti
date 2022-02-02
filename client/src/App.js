import React, { useState, useEffect } from "react";
import Book from "./components/Book";
import bookService from "./services/books";

const App = () => {
  const [books, setBooks] = useState([]);
  const [notification, setNotification] = useState(null);
  const [newBookTitle, setNewBookTitle] = useState("");
  const [newBookAuthor, setNewBookAuthor] = useState("");
  const [newBookDescription, setNewBookDescription] = useState("");
  const [bookId, setBookId] = useState("");

  useEffect(() => {
    bookService.getAll().then((Books) => {
      setBooks(Books);
    });
  }, []);

  const addBook = (event) => {
    event.preventDefault();
    const bookObject = {
      author: newBookAuthor,
      title: newBookTitle,
      description: newBookDescription,
    };
    if (newBookTitle !== "") {
      bookService.create(bookObject).then((returnedBook) => {
        setBooks(books.concat(returnedBook));
      });
      setNotification("New book " + bookObject.title + " was added!");
      setNewBookTitle("");
      setNewBookAuthor("");
      setNewBookDescription("");
    } else {
      setNotification("Book needs a title!");
    }
  };

  const clearForm = () => {
    setNewBookTitle("");
    setNewBookAuthor("");
    setNewBookDescription("");
    setBookId("");
  };

  const updateBook = (bookId) => {
    const bookObject = {
      author: newBookAuthor,
      title: newBookTitle,
      description: newBookDescription,
    };
    if(bookId !== ''){
    bookService.update(bookId, bookObject).then(() => {
      bookService.getAll().then((Books) => {
        setBooks(Books);
      });
    setNotification(bookObject.title + " was updated!");
    clearForm();
    })}
    else{
      setNotification('No book was selected')
    }
  };

  const deleteBook = (id) => {
    if (id !== "") {
      bookService.deleteById(id).then(() => {;
      setNotification("book was deleted!");
      console.log('before', books)
      const newBooksList = books.filter(book => book.id !== bookId)
      setBooks(newBooksList);
      console.log('after', books)
      clearForm();
      })
    } else {
      setNotification("No book was selected");
    }
  };

  const handleBookTitleChange = (event) => {
    console.log(event.target.value);
    setNewBookTitle(event.target.value);
  };
  const handleBookAuthorChange = (event) => {
    console.log(event.target.value);
    setNewBookAuthor(event.target.value);
  };
  const handleBookDescriptionChange = (event) => {
    console.log(event.target.value);
    setNewBookDescription(event.target.value);
  };

  const bookForm = () => (
    <form onSubmit={addBook}>
      <div>
        <label>
          Title:
          <input value={newBookTitle} onChange={handleBookTitleChange} />
        </label>
      </div>
      <div>
        <label>
          Author:
          <input value={newBookAuthor} onChange={handleBookAuthorChange} />
        </label>
      </div>
      <div>
        <label>
          Description:
          <input
            value={newBookDescription}
            onChange={handleBookDescriptionChange}
          />
        </label>
      </div>
      <button type="submit">Save new</button>
    </form>
  );

  const handleBookClick = (book) => {
    setNewBookTitle(book.title);
    setNewBookAuthor(book.author);
    setNewBookDescription(book.description);
    setBookId(book.id);
  };

  return (
    <div>
      <div>
        <h1>Books</h1>
        {notification}
        {bookForm()}
        <button onClick={() => deleteBook(bookId)}>Delete</button>
        <button onClick={() => updateBook(bookId)}>Save</button>
      </div>
      <div className="booklist">
        {books.map((book) => (
          <button className="bookbutton" onClick={() => handleBookClick(book)}>
            <Book key={book.id} book={book} />
          </button>
        ))}
      </div>
    </div>
  );
};

export default App;
