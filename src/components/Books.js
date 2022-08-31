import Book from './Book';

//parent component of books
const Books = ({ data, setData }) => {
  return (
    <article>
      <div className='books'>
        {data.map((bookItem) => {
          return (
            <>
              <Book key={bookItem.id} {...bookItem} />
            </>
          );
        })}
      </div>
    </article>
  );
};

export default Books;
