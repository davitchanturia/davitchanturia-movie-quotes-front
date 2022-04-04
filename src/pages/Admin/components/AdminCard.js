import { useContext } from 'react';
import ModalContext from 'store/modal-context';

const AdminCard = (props) => {
  const modalCtx = useContext(ModalContext);

  const quote = props.movieOrQuote === 'Quotes' ? true : false;

  const onDeleteHandler = (id) => {
    modalCtx.onChangeDelete(true);
    props.onDelete(id);
  };

  const onEditHandler = (id) => {
    if (quote) {
      modalCtx.onChangeQuoteCreate(true);
      props.ShowDataOnEdit(id, 'edit');
    } else {
      modalCtx.onChangeMovieCreate(true);
      props.ShowDataOnEdit(id, 'edit');
    }
  };

  let cardImgPath;

  if (props.movieOrQuote === 'Quotes') {
    cardImgPath = `http://localhost:8000/storage/${props.info.thumbnail}`;
  } else {
    cardImgPath =
      'https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1459&q=80';
  }

  return (
    <div className='h-72 col-span-1 flex flex-col text-center bg-white rounded-lg shadow relative transition-all duration-1000'>
      <div className='flex-1 flex flex-col p-8'>
        <img
          className='w-32 h-32 flex-shrink-0 mx-auto rounded-full'
          src={cardImgPath}
          alt=''
        />
        <h3 className='mt-6 capitalize text-gray-900 text-sm font-medium'>
          {props.info.name.en}
        </h3>
        {quote && (
          <h1 className='capitalize text-gray-500 text-sm mt-1'>
            {props.info.movie.name.en}
          </h1>
        )}
      </div>
      <div className='flex rounded-lg w-full absolute bottom-0 left-0'>
        <div
          onClick={onEditHandler.bind(null, props.info.id)}
          className='w-1/2 py-2 capitalize cursor-pointer text-green-800 text-xs font-medium bg-green-200'
        >
          edit
        </div>
        <div
          onClick={onDeleteHandler.bind(null, props.info.id)}
          className='w-1/2 py-2 capitalize cursor-pointer text-slate-900 text-xs font-medium bg-slate-200'
        >
          delete
        </div>
      </div>
    </div>
  );
};

export default AdminCard;
