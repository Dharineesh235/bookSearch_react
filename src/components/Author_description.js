import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Authors_API } from '../API_URLs';
import '../styles/auth-description.css';
import { Link } from 'react-router-dom';

export default function Author_description() {
    const {aName}=useParams();

    const[author,setAuthor]=useState({})
    useEffect(()=>{
        var fetchAuthor=async()=>{
            var response=await axios.get(Authors_API);
            var data=response.data;
            var filtauthor=data.filter((item)=>item.person==aName);
            setAuthor(filtauthor[0]);
        }
        fetchAuthor();
    },[])
    console.log(author)
  return (
    <div>
        <div>
            <div className='nav'>
                <div><Link className='authDesc-link' to={`/`}>Books</Link></div>
                <div><Link className='authDesc-link' to={`/authors`} >Authors</Link></div>
            </div>
        </div>
        <div className='auth-description'>
            <div className='authContentDiv'>
                <div className='authImg'><img className='authPic' src={author.imgUrl}/></div>
                <div className='auth-content'>
                    <h2><div><b>Name : </b><i><a target='_blank' className='authAnch' href={author.articleUrl}>{author.person}</a></i></div></h2><br/>
                    <h2><div><b>Date Of Birth : </b><i>{author.dateOfBirth}</i></div></h2><br/>
                    <h2><div><b>Place Of Birth : </b><i>{author.placeOfBirth}</i></div></h2><br/>
                    <h2><div><b>Professions : </b><i>{author.professions}</i></div></h2><br/>
                </div>
            </div>
        </div>
    </div>
  )
}
