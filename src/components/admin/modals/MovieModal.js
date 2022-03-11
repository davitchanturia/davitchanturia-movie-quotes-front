import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import apiClient from '../../../api/api';
import { useNavigate } from 'react-router';

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

  const navigate = useNavigate();

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
    };

    if (english && english.length > 3 && georgian && georgian.length > 3) {
      if (props.for === 'edit') {
        (async () => {
          try {
            const response = await apiClient.post('api/edit-movie', {
              englishName: english,
              georgianName: georgian,
              slug: english,
              id: props.val.id,
            });

            if (response.data === 200) {
              navigate('/admin');
            }
          } catch (error) {
            // console.log(error.message);
          }
        })();
      } else {
        (async () => {
          try {
            const response = await apiClient.post('api/add-movie', values);

            if (response.data === 200) {
              navigate('/admin');
            }
          } catch (error) {
            // console.log(error.message);
          }
        })();
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

              <Buttons
                action='create'
                onCancel={props.onClose}
                // onSubmit={onSubmitHandler}
              />
            </div>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default MovieModal;
