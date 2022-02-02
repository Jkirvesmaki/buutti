import React, { useState, useEffect } from "react";
import Book from "./components/Book";
import bookService from "./services/books";

const App = () => {
  const [books, setBooks] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  const [notification, setNotification] = useState(null);
  const [newBookTitle, setNewBookTitle] = useState("");
  const [newBookAuthor, setNewBookAuthor] = useState("");
  const [newBookDescription, setNewBookDescription] = useState("");
  const [bookId, setBookId] = useState("");

  useEffect(() => {
    bookService.getAll().then((initialBooks) => {
      setBooks(initialBooks);
    });
  }, []);

  const addBook = (event) => {
    event.preventDefault();
    const bookObject = {
      author: newBookAuthor,
      title: newBookTitle,
      description: newBookDescription,
    };
    bookService.create(bookObject).then((returnedBook) => {
      setBooks(books.concat(returnedBook));
    });
    setNotification("New book " + bookObject.title + " was added!");
    setNewBookTitle("");
    console.log(newBookTitle);
    setNewBookAuthor("");
    setNewBookDescription("");
  };

  const updateBook = (bookId, book) => {
    const bookObject = {
      author: newBookAuthor,
      title: newBookTitle,
      description: newBookDescription,
    };

    bookService.update(bookId, bookObject);
    setNotification("New book " + bookObject.title + " was updated!");
    setNewBookTitle("");

    setNewBookAuthor("");
    setNewBookDescription("");
  };

  const deleteBook = (id) => {
    if (id != "") {
      bookService.deleteById(id);

      setNotification("book was deleted!");
      setNewBookTitle("");
      setNewBookAuthor("");
      setNewBookDescription("");
      setBookId("");
    } else {
      setNotification("No id was given");
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
      <div>
        <ul>
          {books.map((book) => (
            <button className="book" onClick={() => handleBookClick(book)}>
              <Book key={book.id} book={book} />
            </button>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
