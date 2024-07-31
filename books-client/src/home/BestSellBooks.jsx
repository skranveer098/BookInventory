import React from 'react'
import { useState , useEffect } from 'react';
import BooksCards from '../components/BooksCards';

const FavouriteBooks = ()=> {
    const [books,setBooks]=useState([]);

    useEffect( ()=>{
        fetch("http://localhost:5000/api/all-books").then(res=>res.json()).then(data=>setBooks(data.slice(0,8)))
    },[])
  return (
    <div>
      <BooksCards books={books} headline="Best Seller Books"/>
    </div>
  )
}

export default FavouriteBooks
