const Card = (props) => {
  return (
    <div className='bg-white mt-7 pb-4 rounded-lg'>
      <img
        className='w-full h-52 rounded-t-lg object-cover'
        src={props.imageSrc}
        alt='quote img'
      />

      <h1 className='pl-5 mt-4'>{props.title}</h1>
    </div>
  );
};

export default Card;
