import { useState, useRef } from 'react';
import Author from './Author';
import Buttons from './Buttons';

//surprise component is use to display the genres and authors btns
// I used 2 methods to toggle these 2 btns, one by using ! the other one using useRef
// I also used ternary operator

const PickBook = ({
  genres,
  filteredGenres,
  authors,
  filteredAuthors,
  setBtns,
}) => {
  const genresRef = useRef(null);
  const authorsRef = useRef(null);

  const [isGenresActive, setGenresActive] = useState(true);
  const [isAuthorsActive, setAuthorsActive] = useState(false);

  // following fct use to toggle the genres btns and authors
  const ToggleGenre = () => {
    if (isGenresActive === false) {
      // to prevent the toggling if class is already acyive
      setGenresActive(!isGenresActive);
      setAuthorsActive(!isAuthorsActive);
      DisplayGenres();
      DisplayAuthors();
    }
  };
  const ToggleAuthors = () => {
    if (isAuthorsActive === false) {
      setAuthorsActive(!isAuthorsActive);
      setGenresActive(!isGenresActive);

      DisplayAuthors();
      DisplayGenres();
    }
  };

  //by purpose I decided to use another method this time & I wanted to use useRef, might have been faster with a toggle
  const DisplayGenres = () => {
    genresRef.current.classList.toggle('nonactived');
  };
  const DisplayAuthors = () => {
    authorsRef.current.classList.toggle('nonactived');
  };

  return (
    <article className='book-selection' id='bookie'>
      {/* replace by btns */}
      <h3 className='pick-title'>pick a book</h3>
      <article className='pick'>
        <div className='pickmin'>
          <button
            className={'pick-book ' + (isGenresActive ? 'active' : null)}
            // meams that we have a class of pick-book & CHECK if isGenresActive

            onClick={ToggleGenre}
          >
            <h4>Genres</h4>
          </button>

          <button
            className={'pick-book ' + (isAuthorsActive ? 'active' : null)}
            onClick={ToggleAuthors}
          >
            <h4>Authors</h4>
          </button>
        </div>
        <div className='pick-me' ref={genresRef}>
          <Buttons genres={genres} filteredGenres={filteredGenres} />
        </div>
        <div className='pick-me nonactived' ref={authorsRef}>
          <Author filteredAuthors={filteredAuthors} authors={authors} />
        </div>
      </article>
    </article>
  );
};

export default PickBook;
