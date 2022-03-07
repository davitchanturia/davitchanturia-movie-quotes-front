import { useContext } from 'react';
import DataContext from '../../../store/data-context';

import Buttons from '../../UI/form/Buttons';
import Input from '../../UI/form/Input';
import UploadInput from '../../UI/form/UploadInput';
import Modal from '../../UI/Modal';

const QuoteModal = (props) => {
  const dataCtx = useContext(DataContext);

  let value = { en: '', ka: '' };
  let check = { checkedMovie: {}, moviesWithoutChecked: [], Movies: [] };

  if (props.for === 'edit') {
    //for edit modal we need modified data

    // previous values for inputs
    value.en = props.val.name.en;
    value.ka = props.val.name.ka;

    //active movie
    check.checkedMovie = dataCtx.movie.allMovies.filter(
      (movie) => movie.id == props.val.movie_id
    );

    //filter array without active movie
    check.moviesWithoutChecked = dataCtx.movie.allMovies.filter(
      (movie) => movie.id !== check.checkedMovie[0].id
    );

    // array without active movie
    check.Movies = check.moviesWithoutChecked.map((movie) => {
      return <option key={movie.id}>{movie.name.en}</option>;
    });
  } else {
    //clean values for inputs when create
    value.en = '';
    value.ka = '';

    //for create modal we fetching all movies
    check.Movies = dataCtx.movie.allMovies.map((movie) => {
      return <option key={movie.id}>{movie.name.en}</option>;
    });
  }

  return (
    <Modal>
      <div className='relative inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6'>
        <form action='#' method='POST'>
          <div className='px-4 py-5 bg-white sm:p-6'>
            <div className=''>
              <Input
                title='quote name - english'
                type='text'
                value={value.en}
              />
              <Input
                title='quote name - georgian'
                type='text'
                value={value.ka}
              />
              <UploadInput />
              <select
                name='movie_id'
                className='mt-4 bg-slate-300  block w-full p-2 rounded-md'
              >
                {props.for === 'edit' && (
                  <option id={check.checkedMovie[0].id}>
                    {check.checkedMovie[0].name.en}
                  </option>
                )}
                {check.Movies}
              </select>
              <Buttons action='create' onCancel={props.onClose} />
            </div>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default QuoteModal;
