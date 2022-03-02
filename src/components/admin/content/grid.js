import { useContext } from 'react';

import DataContext from '../../../store/data-context';
import AdminContext from '../../../store/admin-context';

import AdminCard from './content-components/AdminCard';
import CreateButton from './content-components/CreateButton';
import Modal from '../../UI/Modal';

const Grid = () => {
  const dataCtx = useContext(DataContext);
  const adminCtx = useContext(AdminContext);

  let data;

  if (adminCtx.active === 'Movies') {
    data = dataCtx.movie.allMovies;
  }
  if (adminCtx.active === 'Quotes') {
    data = dataCtx.movie.quotes;
  }

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
      <Modal></Modal>
    </>
  );
};

export default Grid;
