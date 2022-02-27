const Circle = (props) => {
  return (
    <div
      className='rounded-full h-10 w-10 m-2 text-white border border-white flex items-center justify-center circle 
           hover:bg-white hover:text-black'
    >
      <a href='/' className='cursor-pointer'>
        {props.lang}
      </a>
    </div>
  );
};

export default Circle;
