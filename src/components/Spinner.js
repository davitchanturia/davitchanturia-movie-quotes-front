import React from 'react';
import classes from 'components/Spinner.module.css';

const Spinner = (props) => {
  const styles =
    'w-full h-screen absolute top-0 left-0 flex justify-center items-center';

  const updatedStyles =
    props.color === 'admin' ? `${styles} bg-blue-100` : `${styles}`;

  return (
    <div className={updatedStyles}>
      <div className={classes.spinner}></div>
    </div>
  );
};

export default Spinner;
