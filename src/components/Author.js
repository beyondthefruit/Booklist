//component to display  my authors btns

const Author = ({ authors, filteredAuthors }) => {
  return (
    <div className='author-filter'>
      {authors.map((author, index) => {
        return (
          <button
            type='button'
            className='author-btns'
            key={index}
            onClick={() => filteredAuthors(author)}
          >
            {author}
          </button>
        );
      })}
    </div>
  );
};

export default Author;
