import { ImBooks } from 'react-icons/im';
import { HiPhotograph } from 'react-icons/hi';
import {
  GiBookPile,
  GiAlienStare,
  GiAtom,
  GiAnatomy,
  GiAncientSword,
  GiBurningSkull,
  GiLockedChest,
  GiOctopus,
  GiBackstab,
} from 'react-icons/gi';

//buttons use to display the genres btns

const Buttons = ({ genres, filteredGenres }) => {
  const GenresIcons = (e) => {
    //  I stored the value inside a var to convert it to lowerCase
    let low = e.toLowerCase();
    if (low === 'all') {
      return <GiBookPile className='genres-icons' />;
    }
    if (low === 'science fiction') {
      return <GiAlienStare className='genres-icons' />;
    }
    if (low === 'phylosophical') {
      return <GiAnatomy className='genres-icons' />;
    }
    if (low === 'fantasy') {
      return <GiAncientSword className='genres-icons' />;
    }
    if (low === 'horror') {
      return <GiBurningSkull className='genres-icons' />;
    }
    if (low === 'history') {
      return <GiLockedChest className='genres-icons' />;
    }
    if (low === 'short stories') {
      return <GiOctopus className='genres-icons' />;
    }
    if (low === 'photo') {
      return <HiPhotograph className='genres-icons' />;
    }
    if (low === 'thriller') {
      return <GiBackstab className='genres-icons' />;
    }
  };

  return (
    <div className='genre-filter'>
      {genres.map((individualGenre, index) => {
        return (
          <button
            type='button'
            className='genre-btn'
            key={index}
            onClick={() => filteredGenres(individualGenre)}
          >
            {/* fcc icons */}
            {GenresIcons(individualGenre)}
            {individualGenre}
          </button>
        );
      })}
    </div>
  );
};

export default Buttons;
