import { useContext } from 'react';

import DataContext from '../../../store/data-context';
import AdminContext from '../../../store/admin-context';
import ModalContext from '../../../store/modal-context';

import AdminCard from './content-components/AdminCard';
import CreateButton from './content-components/CreateButton';
import ConfirmModal from '../modals/ConfirmModal';

const Grid = () => {
  const dataCtx = useContext(DataContext);
  const adminCtx = useContext(AdminContext);
  const modalCtx = useContext(ModalContext);

  //variable for different content
  let data;

  if (adminCtx.active === 'Movies') {
    data = dataCtx.movie.allMovies;
  }
  if (adminCtx.active === 'Quotes') {
    data = dataCtx.movie.quotes;
  }

  const onCloseHandler = () => {
    modalCtx.onChangeLogout(false);
    modalCtx.onChangeDelete(false);
  };

  return (
    <>
      <div>
        <CreateButton />
      </div>

      <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-6'>
        {data.map((file) => (
          <AdminCard key={file.id} info={file} movieOrQuote={adminCtx.active} />
        ))}
      </div>
      {modalCtx.isOpenLogout && (
        <ConfirmModal for='logout' onClose={onCloseHandler} />
      )}
      {modalCtx.isOpenDelete && (
        <ConfirmModal for='delete' onClose={onCloseHandler} />
      )}
    </>
  );
};

export default Grid;
