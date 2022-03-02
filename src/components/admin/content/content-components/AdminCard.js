const AdminCard = (props) => {
  const quote = props.movieOrQuote === 'Quote' ? true : false;
  return (
    <div className=' col-span-1 flex flex-col text-center bg-white rounded-lg shadow'>
      <div className='flex-1 flex flex-col p-8'>
        <img
          className='w-32 h-32 flex-shrink-0 mx-auto rounded-full'
          src='https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1459&q=80'
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
      <div>
        <div className='py-2 capitalize cursor-pointer text-green-800 text-xs font-medium bg-green-100 rounded-br-lg rounded-bl-lg'>
          edit
        </div>
      </div>
    </div>
  );
};

export default AdminCard;