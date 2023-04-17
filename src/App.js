import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import BookList from './components/BookList';
import Authors from './components/Authors';
import Book_description from './components/Book_description';
import './styles/bootstrap.min.css';
import Author_description from './components/Author_description';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<BookList/>}/>
        <Route path='/description/:id' element={<Book_description/>}/>
        <Route path='/authdescription/:aName' element={<Author_description/>}/>
        <Route path='/authors' element={<Authors/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
