import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Head-Foot.css';

export default function Header() {
  return (
    <div>
        <div className='nav'>
            <div><Link to={`/`}>Books</Link></div>
            <div><Link to={`/authors`} >Authors</Link></div>
        </div>
    </div>
  )
}
