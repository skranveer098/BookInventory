// routes/bookRoutes.js

const express = require('express');
const router = express.Router();
const Book = require('../models/book');

// Insert a book into db
router.post('/upload-book', async (req, res) => {
  try {
    const book = new Book(req.body);
    const result = await book.save();
    res.send(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Get all books
router.get('/all-books', async (req, res) => {
  try {
    const books = await Book.find();
    res.send(books);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Get single book data
router.get('/book/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const result = await Book.findById(id);
    res.send(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Update a book data
router.put('/book/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const data = req.body;
    const result = await Book.findByIdAndUpdate(id, data, { new: true });
    res.send(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Delete a book data
router.delete('/book/:id', async (req, res) => {
  try {
    const id = req.params.id;
    console.log(`Attempting to delete book with ID: ${id}`); // Debugging line
    const result = await Book.findByIdAndDelete(id);
    if (!result) {
      console.log(`Book with ID: ${id} not found`); // Debugging line
      return res.status(404).send({ error: 'Book not found' });
    }
    console.log(`Deleted book with ID: ${id}`); // Debugging line
    res.send(result);
  } catch (error) {
    console.error('Error deleting book:', error); // Debugging line
    res.status(500).send(error);
  }
});

// Find books by category
router.get('/books-by-category', async (req, res) => {
  try {
    const query = req.query.category ? { category: req.query.category } : {};
    const result = await Book.find(query);
    res.send(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
