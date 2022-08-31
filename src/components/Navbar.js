// import { FaBars } from 'react-icons/fa';

const Navbar = () => {
  const Bookie = () => {
    const anchor = document.querySelector('#bookie');
    anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  //can't use a parameter in my fct wanted to create only 1 fct use a parameter such as : const BookieBalboa = (e) => {
  // const wrap = document.querySelector('#single-wrap');
  // e.scrollIntoView({ behavior: 'smooth', block: 'center' });
  //then call it in my onClick : BookieBalboa(wrap) but not working

  const BookieBalboa = () => {
    const wrap = document.querySelector('#single-wrap');
    wrap.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };
  return (
    <nav>
      <div className='nav'>
        <div className='nav-header'>
          <div className='nav-center'>
            <ul className='links'>
              <li>
                <a onClick={BookieBalboa}>Books</a>
              </li>
              <li>
                <a onClick={Bookie}>Pick a book</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
