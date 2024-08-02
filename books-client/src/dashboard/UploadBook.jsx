import React, { useState } from "react";
import {
  Button,
  Checkbox,
  Label,
  Select,
  TextInput,
  Textarea,
} from "flowbite-react";

const UploadBook = () => {
  const bookCategories = [
    "Fiction",
    "Non-Fiction",
    "History",
    "Programming",
    "Science Fiction",
    "Fantasy",
    "Horror",
    "Biography",
    "Autobiography",
    "History",
    "Self-help",
    "Memoir",
    "Business",
    "Children Books",
    "Travel",
    "Religion",
    "Art and Design",
  ];

  const [selectedBookCategory, setSelectedBookCategory] = useState(
    bookCategories[0]
  );

  const handleChangeSelectedValue = (e) => {
    setSelectedBookCategory(e.target.value);
  };

  const handleBookSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const bookTitle = form.bookTitle.value;
    const authorName = form.authorName.value;
    const bookDescription = form.bookDescription.value;
    const bookPDFURL = form.bookPDFURL.value;
    const imageURL = form.imageURL.value;
    const category = form.categoryName.value;

    const bookObj = {
      bookTitle,
      authorName,
      bookDescription,
      bookPDFURL,
      imageURL,
      category,
    };

    console.log(bookObj);

    fetch("https://book-inventory-kappa.vercel.app/api/upload-book", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(bookObj),
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Book uploaded successfully!!!");
        form.reset();
      });
  };

  return (
    <div className="px-4 my-12 w-full">
      <h2 className="mb-8 text-3xl font-bold text-center text-blue-600">
        Upload A Book
      </h2>
      <form onSubmit={handleBookSubmit} className="flex flex-col gap-4 w-full">
        <div className="flex gap-8 w-full">
          <div className="w-full">
            <div className="mb-2 block">
              <Label
                htmlFor="bookTitle"
                value="Book Title"
                className="text-purple-600"
              />
            </div>
            <TextInput
              id="bookTitle"
              name="bookTitle"
              type="text"
              placeholder="Book Name"
              required
              className="border-2 border-purple-600"
            />
          </div>
          <div className="w-full">
            <div className="mb-2 block">
              <Label
                htmlFor="authorName"
                value="Author Name"
                className="text-green-600"
              />
            </div>
            <TextInput
              id="authorName"
              name="authorName"
              type="text"
              placeholder="Author Name"
              required
              className="border-2 border-green-600"
            />
          </div>
        </div>
        <div className="flex gap-8 w-full">
          <div className="w-full">
            <div className="mb-2 block">
              <Label
                htmlFor="inputState"
                value="Book Category"
                className="text-orange-600"
              />
            </div>
            <Select
              id="inputState"
              name="categoryName"
              className="w-full rounded border-2 border-orange-600"
              value={selectedBookCategory}
              onChange={handleChangeSelectedValue}
            >
              {bookCategories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </Select>
          </div>
          <div className="w-full">
            <div className="mb-2 block">
              <Label
                htmlFor="imageURL"
                value="Book Image URL"
                className="text-red-600"
              />
            </div>
            <TextInput
              id="imageURL"
              name="imageURL"
              type="text"
              placeholder="Book Image URL"
              required
              className="border-2 border-red-600"
            />
          </div>
        </div>
        <div className="w-full">
          <div className="mb-2 block">
            <Label
              htmlFor="bookDescription"
              value="Book Description"
              className="text-blue-600"
            />
          </div>
          <Textarea
            id="bookDescription"
            name="bookDescription"
            placeholder="Write your book description"
            required
            className="w-full border-2 border-blue-600"
            rows={6}
          />
        </div>
        <div className="w-full">
          <div className="mb-2 block">
            <Label
              htmlFor="bookPDFURL"
              value="Book PDF URL"
              className="text-purple-600"
            />
          </div>
          <TextInput
            id="bookPDFURL"
            name="bookPDFURL"
            type="text"
            placeholder="Book PDF URL"
            required
            className="border-2 border-purple-600"
          />
        </div>
        <Button
          type="submit"
          className="mt-5 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white px-4 py-2 rounded-lg shadow-lg hover:shadow-xl"
        >
          Upload Book
        </Button>
      </form>
    </div>
  );
};

export default UploadBook;
