import React from 'react'
import { useState , useEffect } from 'react';
import BooksCards from '../components/BooksCards'

const OtherBooks = () => {
    const [books,setBooks]=useState([]);

    useEffect( ()=>{
        fetch("http://localhost:5000/api/all-books").then(res=>res.json()).then(data=>setBooks(data.slice(4,8)))
    },[])
  return (
    <div>
      <BooksCards books={books} headline="Other Books"/>
    </div>
  )
}

export default OtherBooks
