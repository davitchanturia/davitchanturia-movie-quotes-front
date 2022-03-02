const CreateButton = () => {
  return (
    <button
      type='button'
      className='inline-flex items-center px-3 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-white bg-slate-900 hover:bg-slate-200 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all duration-500'
    >
      <svg
        className='h-5 w-5 mr-1'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
          d='M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'
        />
      </svg>
      Create
    </button>
  );
};

export default CreateButton;
