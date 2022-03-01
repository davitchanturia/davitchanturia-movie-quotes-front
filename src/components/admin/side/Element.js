const Element = (props) => {
  const styles =
    'group flex items-center w-56 px-2 py-2 text-base font-medium rounded-md text-white';

  const classes =
    props.active === props.title ? `${styles} bg-slate-900` : `${styles}`;

  const onfocusHandler = () => {
    props.onFocus(props.title);
  };
  return (
    <button onClick={onfocusHandler} className={classes} aria-current='page'>
      <svg
        className='mr-4 flex-shrink-0 h-6 w-6  text-white foc'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
        aria-hidden='true'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
          d={props.svgPath}
        />
      </svg>
      {props.title}
    </button>
  );
};

export default Element;
