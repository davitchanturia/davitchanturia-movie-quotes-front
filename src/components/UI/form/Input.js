import React from 'react';
import ErrorMessage from 'components/UI/form/ErrorMessage';

const Input = ({ type, title, value, register, error }) => {
  return (
    <div className='col-span-1 mt-3 transition-all duration-1000'>
      <label
        htmlFor={type}
        className='block text-sm font-medium text-gray-700 mb-3 capitalize'
      >
        {title}
      </label>
      <input
        defaultValue={value}
        type={type}
        name={type}
        id={type}
        autoComplete='given-name'
        className='p-2 focus:outline-none block w-full shadow-sm sm:text-sm border border-gray-200 rounded-md'
        {...register}
      />
      <ErrorMessage>{error}</ErrorMessage>
    </div>
  );
};

export default Input;
