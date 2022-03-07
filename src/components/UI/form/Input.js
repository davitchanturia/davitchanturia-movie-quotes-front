const Input = (props) => {
  return (
    <div className='col-span-1 mt-3'>
      <label
        htmlFor={props.type}
        className='block text-sm font-medium text-gray-700 capitalize'
      >
        {props.title}
      </label>
      <input
        defaultValue={props.value}
        type={props.type}
        name={props.type}
        id={props.type}
        autoComplete='given-name'
        className='mt-3 p-2 focus:outline-none block w-full shadow-sm sm:text-sm border border-gray-200 rounded-md'
      />
    </div>
  );
};

export default Input;
