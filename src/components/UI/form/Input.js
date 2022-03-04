const Input = (props) => {
  return (
    <div className='col-span-1 mt-3'>
      <label
        htmlFor='first-name'
        className='block text-sm font-medium text-gray-700 capitalize'
      >
        {props.title}
      </label>
      <input
        type='text'
        name='first-name'
        id='first-name'
        autoComplete='given-name'
        className='mt-3 p-2 focus:outline-none block w-full shadow-sm sm:text-sm border border-gray-200 rounded-md'
      />
    </div>
  );
};

export default Input;
