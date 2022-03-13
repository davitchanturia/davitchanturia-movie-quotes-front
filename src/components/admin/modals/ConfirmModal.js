import apiClient from '../../../api/api';
import { useNavigate } from 'react-router';
import { useContext } from 'react';
import AdminContext from '../../../store/admin-context';

import Buttons from '../../UI/form/Buttons';
import Modal from '../../UI/Modal';
import Warning from '../../UI/svg/Warning';
import Xclose from '../../UI/svg/Xclose';

const ConfirmModal = (props) => {
  const navigate = useNavigate();
  const adminCtx = useContext(AdminContext);

  let title;
  let buttonText;

  if (props.for === 'logout') {
    title = 'Hey admin! why are you running?';
    buttonText = 'Run';
  }

  if (props.for === 'delete') {
    title = 'Do not kill me ninoo!';
    buttonText = 'Kill it';
  }

  const actionHandler = (e) => {
    e.preventDefault();
    if (props.for === 'logout') {
      (async () => {
        try {
          const response = await apiClient.post('api/logout');

          if (response.data === 200) {
            navigate('/login');
          }
          adminCtx.onChangeActivePage('Home');
        } catch (error) {
          // console.log(error.message);
        }
      })();
    }
    if (props.for === 'delete') {
      if (adminCtx.active === 'Movies') {
        (async () => {
          try {
            const response = await apiClient.delete(
              `api/delete-movie/${props.delete}`
            );

            console.log(response);

            if (response.data === 200) {
              navigate('/admin');
            }
          } catch (error) {
            // console.log(error.message);
          }
        })();
      }
      if (adminCtx.active === 'Quotes') {
        (async () => {
          try {
            const response = await apiClient.delete(
              `api/delete-quote/${props.delete}`
            );

            console.log(response);

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
        <div className='hidden sm:block absolute top-0 right-0 pt-4 pr-4'>
          <button
            onClick={props.onClose}
            type='button'
            className='bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
          >
            <Xclose />
          </button>
        </div>
        <div className='sm:flex sm:items-start'>
          <div className='mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-slate-100 sm:mx-0 sm:h-10 sm:w-10'>
            <Warning />
          </div>
          <div className='mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left'>
            <div className='mt-2'>
              <p className='text-md text-gray-900'>{title}</p>
            </div>
          </div>
        </div>
        <Buttons
          action={buttonText}
          onCancel={props.onClose}
          onClick={actionHandler}
        />
      </div>
    </Modal>
  );
};

export default ConfirmModal;

// const logoutPortal = () => {
//   return (
//     <>
//       {ReactDOM.createPortal(<LogoutModal />, document.querySelector('#modal'))}
//     </>
//   );
// };

// export default logoutPortal;
