import { useContext } from 'react';
import AdminContext from 'store/admin-context';
import ModalContext from 'store/modal-context';

const Element = (props) => {
  const adminCtx = useContext(AdminContext);
  const modalCtx = useContext(ModalContext);

  const TextStyles =
    'group flex items-center w-full lg:w-72 px-2 py-2 text-base font-medium rounded-md text-white transition-all duration-500 lg:ml-auto';

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
    if (props.title === 'Log out') {
      modalCtx.onChangeLogout(true);
    } else {
      adminCtx.onChangeActivePage(props.title);
    }
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
