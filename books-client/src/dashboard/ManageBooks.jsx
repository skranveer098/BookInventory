import React, { useEffect, useState } from 'react';
import { Table } from "flowbite-react";
import { Link } from "react-router-dom";

const ManageBooks = () => {
  const [allBooks, setAllBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/all-books")
      .then(res => res.json())
      .then(data => {
        console.log('Fetched data:', data); // Debugging line
        setAllBooks(data);
      })
      .catch(err => console.error('Error fetching books:', err));
  }, []);

  // Delete a book
  const handleDelete = (id) => {
    console.log('Deleting book with ID:', id); // Debugging line
    fetch(`http://localhost:5000/api/book/${id}`, {
      method: 'DELETE',
    })
    .then(response => {
      if (response.ok) {
        setAllBooks(allBooks.filter(book => book._id !== id));
        alert("Book is deleted successfully!");
      } else {
        console.error('Failed to delete book');
        alert("Failed to delete book. Please try again.");
      }
    })
    .catch(err => {
      console.error('Error deleting book:', err);
      alert("Error deleting book. Please try again.");
    });
  };

  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold text-center text-purple-700'>
        Manage Your Books
      </h2>
      <Table className='lg:w-[1000px] mx-auto '>
        <Table.Head className='bg-gradient-to-r from-blue-500 to-indigo-600 text-white'>
          <Table.HeadCell>No.</Table.HeadCell>
          <Table.HeadCell>Book Name</Table.HeadCell>
          <Table.HeadCell>Author Name</Table.HeadCell>
          <Table.HeadCell>Category</Table.HeadCell>
          <Table.HeadCell>Price</Table.HeadCell>
          <Table.HeadCell>
            <span>Edit or Manage</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className='divide-y'>
          {allBooks.map((book, index) => (
            <Table.Row key={book._id} className="bg-white hover:bg-gray-50 transition-colors duration-300">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900">
                {index + 1}
              </Table.Cell>
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900">
                {book.bookTitle}
              </Table.Cell>
              <Table.Cell className="whitespace-nowrap font-medium text-gray-700">
                {book.authorName}
              </Table.Cell>
              <Table.Cell className="whitespace-nowrap font-medium text-gray-600">
                {book.category}
              </Table.Cell>
              <Table.Cell className="text-green-600 font-semibold">
                ${book.price}
              </Table.Cell>
              <Table.Cell>
                <Link
                  to={`/admin/dashboard/edit-books/${book._id}`}
                  className="font-medium text-cyan-600 hover:underline dark:text-cyan-500 mr-5"
                >
                  Edit
                </Link>
                <button
                  onClick={() => handleDelete(book._id)}
                  className='bg-red-600 px-4 py-2 font-semibold text-white rounded-md hover:bg-red-700 transition-colors duration-300'
                >
                  Delete
                </button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}

export default ManageBooks;
