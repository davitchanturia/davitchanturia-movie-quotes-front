import Add from 'components/UI/svg/Add';

const CreateButton = (props) => {
  return (
    <button
      onClick={props.onCreate}
      type='button'
      className='inline-flex items-center px-3 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-white bg-slate-900 hover:bg-slate-200 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all duration-500'
    >
      <Add />
      Create
    </button>
  );
};

export default CreateButton;
