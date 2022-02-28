import React from 'react';
import classes from './Spinner.module.css';

const Spinner = () => {
  return (
    <div className='w-full h-screen absolute flex justify-center items-center'>
      <div className={classes.spinner}></div>
    </div>
  );
};

export default Spinner;
