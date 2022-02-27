import { Link } from 'react-router-dom';

import Language from '../components/Language';

const Main = (props) => {
  return (
    <section>
      <div className='w-2/4 h-screen m-auto justify-center align-middle'>
        <div id='card' className='w-3/5 m-auto pt-32'>
          <img
            className='w-full h-64 rounded-md object-cover'
            alt=''
            src='https://see.news/wp-content/uploads/2021/04/friends.jpg'
          />
          <div className='pt-9'>
            <h1 className='text-center text-white text-xl capitalize'>
              {props.data.quote.name.en}
            </h1>

            <Link
              className='block text-center text-white mt-10 underline capitalize'
              to='/quotes'
            >
              {props.data.movie.name.en}
            </Link>
          </div>
        </div>
      </div>
      <Language />
    </section>
  );
};

export default Main;
