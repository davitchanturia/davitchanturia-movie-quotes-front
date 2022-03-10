import React from 'react';

const Input = ({ type, title, value, register, error }) => {
  return (
    <div className='col-span-1  transition-all duration-1000'>
      <label
        htmlFor={type}
        className='block text-sm font-medium text-gray-700 mb-3 capitalize'
      >
        {title}
      </label>
      <input
        {...register}
        defaultValue={value}
        type={type}
        name={type}
        id={type}
        autoComplete='given-name'
        className='p-2 focus:outline-none block w-full shadow-sm sm:text-sm border border-gray-200 rounded-md'
      />
      <p className='text-red-500 text-sm mt-1 h-1'>{error}</p>
    </div>
  );
};

export default Input;
