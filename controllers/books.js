const booksRouter = require('express').Router()
const Book = require('../models/book')

booksRouter.get('/', (request, response) => {
  Book.find({}).then(books => {
    response.json(books.map(note => note.toJSON()))
  })
})


booksRouter.post('/', (request, response, next) => {
  const body = request.body

  const book = new Book({
    title: body.title,
    author: body.author,
    description: body.description
  })

  book.save()
    .then(savedBook => {
      response.json(savedBook.toJSON())
    })
    .catch(error => next(error))
})

booksRouter.delete('/:id', (request, response, next) => {
  Book.findByIdAndRemove(request.params.id)
    .then(() => {
      response.status(204).end()
    })
    .catch(error => next(error))
})

booksRouter.put('/:id', (request, response, next) => {
  const body = request.body

  const book = {
    title: body.title,
    author: body.author,
    description: body.description,
  }

  Book.findByIdAndUpdate(request.params.id, book, { new: true })
    .then(updatedBook => {
      response.json(updatedBook.toJSON())
    })
    .catch(error => next(error))
})

  module.exports = booksRouter