const Element = (props) => {
  const TextStyles =
    'group flex items-center w-56 px-2 py-2 text-base font-medium rounded-md text-white';

  const SvgStyles = 'mr-4 flex-shrink-0 h-6 w-6';

  const TextClasses =
    props.active === props.title
      ? `${TextStyles} bg-slate-900`
      : `${TextStyles} text-black`;

  const SvgClasses =
    props.active === props.title
      ? `${SvgStyles} text-white`
      : `${SvgStyles} text-black`;

  const onfocusHandler = () => {
    props.onFocus(props.title);
  };

  return (
    <button
      onClick={onfocusHandler}
      className={TextClasses}
      aria-current='page'
    >
      <svg
        className={SvgClasses}
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
