const Card = (props) => {
  return (
    <div class='bg-white mt-7 pb-4 rounded-lg'>
      <img
        class='w-full h-52 rounded-t-lg object-cover'
        src='https://see.news/wp-content/uploads/2021/04/friends.jpg'
        alt='quote img'
      />

      <h1 class='pl-5 mt-4'>{props.title}</h1>
    </div>
  );
};

export default Card;
