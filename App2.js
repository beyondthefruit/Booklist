import { useState } from 'react';
import './App.css';
import bookData from './components/data';
import Books from './components/Books';
import Book from './components/Book';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Buttons from './components/Buttons';
import Author from './components/Author';
import List from './components/List';
import PickBook from './components/Surprise';
//categories
// book that I read
// filter by author/genre
// reading list/en attente

// add all to author and genre for btns creation
const allGenre = [
  'all',
  ...new Set([].concat(...bookData.map((genreItem) => genreItem.genre))),
];

const allAuthor = [
  'all',
  ...new Set(bookData.map((authorItem) => authorItem.author)),
];

//try to find a fix for my dynamic btns with multiple genre
// const genrer = bookData.reduce((ids, item) => {
//   if (item.genre.length > ) {
//     ids.push(item.id);
//   }
//   return ids;
// }, []);
// console.log(genrer);

function App() {
  //useState must be placed in fct App
  const [data, setData] = useState(bookData);
  const [genres, setGenres] = useState(allGenre); // filter btns by genre
  const [authors, SetAuthor] = useState(allAuthor); //to filter author

  const filteredGenres = (indGenre) => {
    if (indGenre === 'all') {
      setData(bookData);
      return;
    }
    const newGenre = bookData.filter((genr) => genr.genre === indGenre);
    //haven't figure out yet how to filter multiple genre, will come back later

    //really important to create a new array with original value (bookData != allGenre)
    setData(newGenre); //we use useState setData and apply the new const
  };

  const filteredAuthors = (indAuthor) => {
    if (indAuthor === 'all') {
      setData(bookData);
      return;
    }
    const newAuthor = bookData.filter((item) => item.author === indAuthor);
    setData(newAuthor);
  };

  return (
    <>
      <Navbar />
      <main>
        <div className='choose'>Find a book</div>
        <div className='author'>
          <Author filteredAuthors={filteredAuthors} authors={authors} />
        </div>

        <Buttons genres={genres} filteredGenres={filteredGenres} />
        <Books data={data} setData={setData} />
        <div className='underline'></div>
        <PickBook />
      </main>
      <Footer />
    </>
  );
}

export default App;
