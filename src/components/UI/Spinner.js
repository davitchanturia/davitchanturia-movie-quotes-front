import React from 'react';
import classes from './Spinner.module.css';

const Spinner = () => {
  return (
    <div className='w-full h-screen absolute top-0 left-0 flex justify-center items-center'>
      <div className={classes.spinner}></div>
    </div>
  );
};

export default Spinner;
