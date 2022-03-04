import Buttons from '../../UI/form/Buttons';
import Input from '../../UI/form/Input';
import Modal from '../../UI/Modal';

const MovieModal = (props) => {
  return (
    <Modal>
      <div className='relative inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6'>
        <form action='#' method='POST'>
          <div className='px-4 py-5 bg-white sm:p-6'>
            <div className=''>
              <Input title='movie name - english' />

              <Input title='movie name - georgian' />

              <Buttons action='create' onCancel={props.onClose} />
            </div>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default MovieModal;
