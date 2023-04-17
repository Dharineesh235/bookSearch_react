import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Books_API } from '../API_URLs';
import '../styles/book-description.css'
import { Link } from 'react-router-dom';

export default function Book_description() {
    const {id}=useParams();
    const[book,setBook]=useState({});
    useEffect(()=>{
        var fetchBooks=async()=>{
            let response=await axios.get(Books_API);
            let data=response.data;
            let filtredData=data.filter((item)=>item.id==id);
            setBook(filtredData[0]);
        }
        fetchBooks();
    },[])
    console.log(book);
  return (
    <div>
        <div>
            <div className='nav'>
                <div><Link className='bookDescLink' to={`/`}>Books</Link></div>
                <div><Link className='bookDescLink' to={`/authors`} >Authors</Link></div>
            </div>
        </div>
        <div className='book-description'>
            <div className='description-flex'>
                <div className='desc-img-div'><img className='desc-img' src={book.image_url}/></div>
                <div className='description-info'>
                    <p><h2><b>TITLE : </b> <i>{book.title}</i></h2></p>
                    <p><h2><b>AUTHORS : </b> <i>{book.authors}</i></h2></p>
                    <p><h2><b>PAGES : </b> <i>{book.num_pages}</i></h2></p>
                    <p><h2><b>RATING : </b> <i>{book.rating}</i></h2></p>
                    <p><h2><b>RATING COUNT : </b> <i>{book.rating_count}</i></h2></p>
                    <p><h2><b>REVIEW COUNT : </b> <i>{book.review_count}</i></h2></p>
                    <p><h2><b>GENRES : </b> <i>{book.genres}</i></h2></p>
                </div>
            </div>
            <div><h1 className='desc-desc'>{`${book.Quote1}`}</h1></div>
            <div className='desc-desc'>
                <p>{book.description}</p>
            </div>
            <div><h1 className='desc-desc'>{`${book.Quote2}`}</h1></div>
        </div>
    </div>
  )
}
