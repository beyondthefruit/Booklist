import { useState } from 'react';
import { GiStarsStack } from 'react-icons/gi';
import { ImStarFull, ImStarHalf, ImStarEmpty } from 'react-icons/im';
import { GiFountainPen, GiBookCover } from 'react-icons/gi';

//component to render my books

const Book = ({ title, author, genre, photo, desc, rating, review }) => {
  const [readMore, setReadMore] = useState(false);

  //fct to fix multiple genres display and onClick problem I checked if it was anArray if true use join method
  const meli = (e) => {
    if (Array.isArray(e) === true) {
      // genre are display without space, so added '' and ,
      return e.join(', ');
    }
    if (Array.isArray(e) === false) {
      return e;
    }
  };

  return (
    <article className='single-book' id='single-wrap'>
      <img src={photo} alt={title} />
      <div className='information'>
        <h3 className='book-title'>{title}</h3>
        <div className='title-genre'>
          <p className='author'>
            <GiFountainPen className='book-icons' />
            {author}
          </p>
          <p className='genre'>
            <GiBookCover className='book-icons' />
            {meli(genre)}
          </p>
        </div>
        <p className='description'>
          {readMore ? desc : `${desc.substring(0, 200)}...`}{' '}
        </p>
        <button className='read' onClick={() => setReadMore(!readMore)}>
          {readMore ? 'show less' : 'read more'}
        </button>

        <div className='review'>
          <h4>My review</h4>
          <p className='review-bla'>{review}</p>
          <p className='rating'>
            {rating}

            {/* inline fct star rating */}
            {rating === 10 ? (
              <GiStarsStack className='icons' />
            ) : rating >= 8 && rating <= 10 ? (
              <ImStarFull className='icons' />
            ) : rating >= 5 && rating <= 7 ? (
              <ImStarHalf className='icons' />
            ) : (
              <ImStarEmpty className='icons' />
            )}
          </p>
        </div>
      </div>
    </article>
  );
};

export default Book;
