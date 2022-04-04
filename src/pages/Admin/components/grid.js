import { useContext, useState } from 'react';

import DataContext from 'store/dataContext';
import AdminContext from 'store/adminContext';
import ModalContext from 'store/modalContext';

import AdminCard from 'pages/Admin/components/AdminCard';
import CreateButton from 'pages/Admin/components/CreateButton';
import ConfirmModal from 'pages/Admin/components/ConfirmModal';
import MovieModal from 'pages/Admin/components/MovieModal';
import QuoteModal from 'pages/Admin/components/QuoteModal';

const Grid = () => {
  const [editData, setEditData] = useState({});
  const [createOrEdit, setCreateOrEdit] = useState('create');
  const [deleteData, setDeleteData] = useState('');

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

  const deleteCardHandler = (id) => {
    setDeleteData(id);
  };

  return (
    <>
      <div>
        <CreateButton onCreate={showCreateHandler} />
      </div>

      <div
        className='grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-4 pr-8 mt-6 h-auto overflow-y-scroll  rounded-lg'
        style={{ height: '700px' }}
      >
        {data.map((file) => (
          <AdminCard
            key={file.id}
            info={file}
            movieOrQuote={adminCtx.active}
            ShowDataOnEdit={returnData}
            onDelete={deleteCardHandler}
          />
        ))}
      </div>
      {modalCtx.isOpenLogout && (
        <ConfirmModal for='logout' onClose={onCloseHandler} />
      )}
      {modalCtx.isOpenDelete && (
        <ConfirmModal
          for='delete'
          onClose={onCloseHandler}
          delete={deleteData}
        />
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
