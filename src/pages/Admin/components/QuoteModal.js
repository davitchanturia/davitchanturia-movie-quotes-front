import { useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import DataContext from 'store/dataContext';
import useCrud from 'hooks/useCrud';

import Buttons from 'components/Buttons';
import Input from 'components/Input';
import UploadInput from 'components/UploadInput';
import Modal from 'components/Modal';
import ErrorMessage from 'components/ErrorMessage';

const QuoteModal = (props) => {
  const dataCtx = useContext(DataContext);

  const {
    getValues,
    setValue,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const crud = useCrud();
  const { actionRequest, backError } = crud;

  let check = { checkedMovie: {}, moviesWithoutChecked: [], Movies: [] };

  useEffect(() => {
    if (props.for === 'edit') {
      // previous values for inputs
      setValue('quoteNameEnglish', props.val.name.en);
      setValue('quoteNameGeorgian', props.val.name.ka);
    }
  }, []);

  if (props.for === 'edit') {
    //for edit modal we need modified data for dropdown

    //active movie
    check.checkedMovie = dataCtx.allData.allMovies.filter(
      (movie) => movie.id == props.val.movie_id
    );

    //filter array without active movie
    check.moviesWithoutChecked = dataCtx.allData.allMovies.filter(
      (movie) => movie.id !== check.checkedMovie[0].id
    );

    // array without active movie
    check.Movies = check.moviesWithoutChecked.map((movie) => {
      return <option key={movie.id}>{movie.name.en}</option>;
    });
  } else {
    //for create modal we fetching all movies
    check.Movies = dataCtx.allData.allMovies.map((movie) => {
      return <option key={movie.id}>{movie.name.en}</option>;
    });
  }

  const onSubmitHandler = (data) => {
    const english = getValues('quoteNameEnglish');
    const georgian = getValues('quoteNameGeorgian');
    const movie = getValues('movie_id');
    const image = getValues('thumbnail');

    const values = new FormData();
    values.append('englishName', english);
    values.append('georgianName', georgian);
    values.append('relevantMovie', movie);
    values.append('thumbnail', image[0]);
    values.append('id', props.val.id);

    if (
      english &&
      english.length > 3 &&
      georgian &&
      georgian.length > 3 &&
      image
    ) {
      if (props.for === 'edit') {
        actionRequest('api/edit-quote', values);
      } else {
        actionRequest('api/add-quote', values);
      }
    }
  };

  return (
    <Modal>
      <div className='relative inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6'>
        <form action='#' method='POST' onSubmit={handleSubmit(onSubmitHandler)}>
          <div className='px-4 py-5 bg-white sm:p-6'>
            <div className=''>
              <Input
                register={register('quoteNameEnglish', {
                  required: 'This filed is required',
                  minLength: {
                    value: 4,
                    message: 'Value has to be more than 4 characters',
                  },
                })}
                title='quote name - english'
                type='text'
                error={errors.quoteNameEnglish?.message}
              />
              <Input
                register={register('quoteNameGeorgian', {
                  required: 'This filed is required',
                  minLength: {
                    value: 4,
                    message: 'Value has to be more than 4 characters',
                  },
                })}
                title='quote name - georgian'
                type='text'
                error={errors.quoteNameGeorgian?.message}
              />
              <UploadInput
                register={register('thumbnail', {
                  required: 'Thumbnail filed is required',
                })}
                error={errors.thumbnail?.message}
              />
              <select
                {...register('movie_id')}
                className='mt-4 bg-slate-300  block w-full p-2 rounded-md'
              >
                {props.for === 'edit' && (
                  <option id={check.checkedMovie[0].id}>
                    {check.checkedMovie[0].name.en}
                  </option>
                )}
                {check.Movies}
              </select>
              <Buttons action='confirm' onCancel={props.onClose} />
              <ErrorMessage>{backError}</ErrorMessage>
            </div>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default QuoteModal;
