import { useState } from 'react';

import './App.css';
import bookData from './data';
import Books from './components/Books';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import PickBook from './components/Surprise';

// Both methods are working at first I used the concat method and then tried with flatMap, no particular reasons as to why I choose one other t
// const allGenre = [
//   'all',
//   ...new Set([].concat(...bookData.map((genreItem) => genreItem.genre))),
// ];
const allGenre = [
  'all',
  ...new Set(bookData.flatMap((genreItem) => genreItem.genre)),
];
console.log(allGenre);

const allAuthor = [
  'all',
  ...new Set(bookData.map((authorItem) => authorItem.author)),
];

function App() {
  //useState must be placed in fct App
  const [data, setData] = useState(bookData);
  const [genres, setGenres] = useState(allGenre); // filter btns by genre
  const [authors, SetAuthor] = useState(allAuthor); //to filter au

  const filteredGenres = (indGenre) => {
    if (indGenre === 'all') {
      setData(bookData);
      scrollBack();
      return;
    }

    //Able to return the necessary result / IndexIf return an array with objects even the Objects we are not looking for in another object this is why we add >= 0 as we are looking only for the first
    const newGenre = bookData.filter((i) => {
      return i.genre.indexOf(indGenre) >= 0;
    });

    //really important to create a new array with original value (bookData != allGenre)
    setData(newGenre); //we use useState setData and apply the new const
    scrollBack();
    return;
  };

  const filteredAuthors = (indAuthor) => {
    if (indAuthor === 'all') {
      setData(bookData);
      scrollBack();
      return;
    }
    const newAuthor = bookData.filter((item) => item.author === indAuthor);
    setData(newAuthor);
    scrollBack();
    return;
  };

  // fct to scroll back when clicking on a button genres/authors
  const scrollBack = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <Navbar />
      <main>
        <Books data={data} />
        <div className='underline'></div>
        <PickBook
          genres={genres}
          filteredGenres={filteredGenres}
          filteredAuthors={filteredAuthors}
          authors={authors}
        />
      </main>
      <Footer />
    </>
  );
}

export default App;
