const Buttons = (props) => {
  return (
    <div className='mt-5 sm:mt-4 sm:flex sm:flex-row-reverse'>
      <button
        type='button'
        className='w-full capitalize inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-slate-900 text-base font-medium text-white hover:bg-slate-600 focus:outline-none focus:ring-2 focus:ring-offset-2  sm:ml-3 sm:w-auto sm:text-sm'
      >
        {props.action}
      </button>
      <button
        onClick={props.onCancel}
        type='button'
        className='mt-3 w-full capitalize inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:w-auto sm:text-sm'
      >
        Cancel
      </button>
    </div>
  );
};

export default Buttons;
