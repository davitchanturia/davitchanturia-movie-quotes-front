import { Trans } from 'react-i18next';

import { Link } from 'react-router-dom';
import i18n from 'i18next';

import Language from 'components/Language';

const Main = (props) => {
  const imagePath = `http://127.0.0.1:8000/storage/${props.data.quote.thumbnail}`;

  return (
    <section>
      <div>
        <Link
          to='/admin'
          className='text-white capitalize absolute top-10 left-10'
        >
          <Trans i18nKey='admin'>admin</Trans>
        </Link>
      </div>
      <div className='w-2/4 h-screen m-auto justify-center align-middle'>
        <div id='card' className='w-3/5 m-auto pt-32'>
          <img
            className='w-full h-64 rounded-md object-cover'
            alt='quote img'
            src={imagePath}
          />
          <div className='pt-9'>
            <h1 className='text-center text-white text-xl capitalize'>
              {props.data.movie.name[i18n.language]}
            </h1>

            <Link
              className='block text-center text-white mt-10 underline capitalize'
              to='/quotes'
            >
              {props.data.quote.name[i18n.language]}
            </Link>
          </div>
        </div>
      </div>
      <Language />
    </section>
  );
};

export default Main;
