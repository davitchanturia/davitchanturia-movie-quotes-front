import { useContext } from 'react';
import DataContext from '../../../store/data-context';

import Buttons from '../../UI/form/Buttons';
import Input from '../../UI/form/Input';
import UploadInput from '../../UI/form/UploadInput';
import Modal from '../../UI/Modal';

const QuoteModal = (props) => {
  const dataCtx = useContext(DataContext);

  let value = { en: 'en', ka: 'ka' };

  if (props.for === 'edit') {
    value.en = props.val.name.en;
    value.ka = props.val.name.ka;
  } else {
    value.en = '';
    value.ka = '';
  }

  const allMovies = dataCtx.movie.allMovies.map((movie) => {
    return <option key={movie.id}>{movie.name.en}</option>;
  });

  return (
    <Modal>
      <div className='relative inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6'>
        <form action='#' method='POST'>
          <div className='px-4 py-5 bg-white sm:p-6'>
            <div className=''>
              <Input title='quote name - english' value={value.en} />
              <Input title='quote name - georgian' value={value.ka} />
              <UploadInput />
              <select className='mt-4 bg-slate-300 text-slate-900 block w-full p-2 rounded-md'>
                {allMovies}
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
