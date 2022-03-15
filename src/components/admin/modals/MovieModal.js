import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import useCrud from '../../../hooks/use-crud';

import Buttons from '../../UI/form/Buttons';
import Input from '../../UI/form/Input';
import Modal from '../../UI/Modal';

const MovieModal = (props) => {
  const {
    getValues,
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const crud = useCrud();
  const { actionRequest, backError } = crud;

  useEffect(() => {
    if (props.for === 'edit') {
      setValue('movieNameEnglish', props.val.name.en);
      setValue('movieNameGeorgian', props.val.name.ka);
    }
  }, []);

  const onSubmitHandler = (data) => {
    const english = getValues('movieNameEnglish');
    const georgian = getValues('movieNameGeorgian');

    const values = {
      englishName: english,
      georgianName: georgian,
      slug: english,
      id: props.val.id,
    };

    if (english && english.length > 3 && georgian && georgian.length > 3) {
      if (props.for === 'edit') {
        actionRequest('api/edit-movie', values);
      } else {
        actionRequest('api/add-movie', values);
      }
    }
  };

  return (
    <Modal>
      <div className='relative inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6'>
        <form onSubmit={handleSubmit(onSubmitHandler)}>
          <div className='px-4 py-5 bg-white sm:p-6'>
            <div className=''>
              <Input
                register={register('movieNameEnglish', {
                  required: 'This filed is required',
                  minLength: {
                    value: 4,
                    message: 'Value has to be more than 4 characters',
                  },
                })}
                title='movie name - english'
                type='text'
                error={errors.movieNameEnglish?.message}
              />

              <Input
                register={register('movieNameGeorgian', {
                  required: 'This filed is required',
                  minLength: {
                    value: 4,
                    message: 'Value has to be more than 4 characters',
                  },
                })}
                title='movie name - georgian'
                type='text'
                error={errors.movieNameGeorgian?.message}
              />

              <Buttons action='confirm' onCancel={props.onClose} />
              <p className='text-red-500 text-sm mt-1 h-2 transition-all duration-1000'>
                {backError}
              </p>
            </div>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default MovieModal;
