import { useContext, useState } from 'react';

import DataContext from '../../../store/data-context';
import AdminContext from '../../../store/admin-context';
import ModalContext from '../../../store/modal-context';

import AdminCard from './content-components/AdminCard';
import CreateButton from './content-components/CreateButton';
import ConfirmModal from '../modals/ConfirmModal';
import MovieModal from '../modals/MovieModal';
import QuoteModal from '../modals/QuoteModal';

const Grid = () => {
  const [editData, setEditData] = useState({});
  const [createOrEdit, setCreateOrEdit] = useState('create');

  const dataCtx = useContext(DataContext);
  const adminCtx = useContext(AdminContext);
  const modalCtx = useContext(ModalContext);

  //variable for different content
  let data;

  if (adminCtx.active === 'Movies') {
    data = dataCtx.allData.allMovies;
  }
  if (adminCtx.active === 'Quotes') {
    data = dataCtx.allData.quotes;
  }

  const onCloseHandler = () => {
    modalCtx.onChangeLogout(false);
    modalCtx.onChangeDelete(false);
    modalCtx.onChangeMovieCreate(false);
    modalCtx.onChangeQuoteCreate(false);
  };

  const showCreateHandler = () => {
    if (adminCtx.active === 'Movies') {
      modalCtx.onChangeMovieCreate(true);
    }
    if (adminCtx.active === 'Quotes') {
      modalCtx.onChangeQuoteCreate(true);
    }
    setCreateOrEdit('create');
  };

  //we are getting relevant data from admin card component after user clickes edit button
  // and it will be forwarded into modal
  const returnData = (id, type) => {
    const result = data.find((el) => el.id === id);
    setEditData(result);
    setCreateOrEdit('edit');
  };

  return (
    <>
      <div>
        <CreateButton onCreate={showCreateHandler} />
      </div>

      <div className='h-5/6 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-6 overflow-y-scroll'>
        {data.map((file) => (
          <AdminCard
            key={file.id}
            info={file}
            movieOrQuote={adminCtx.active}
            ShowDataOnEdit={returnData}
          />
        ))}
      </div>
      {modalCtx.isOpenLogout && (
        <ConfirmModal for='logout' onClose={onCloseHandler} />
      )}
      {modalCtx.isOpenDelete && (
        <ConfirmModal for='delete' onClose={onCloseHandler} />
      )}
      {modalCtx.isOpenCreateMovie && (
        <MovieModal
          for={createOrEdit}
          onClose={onCloseHandler}
          val={editData}
        />
      )}
      {modalCtx.isOpenCreateQuote && (
        <QuoteModal
          for={createOrEdit}
          onClose={onCloseHandler}
          val={editData}
        />
      )}
    </>
  );
};

export default Grid;
