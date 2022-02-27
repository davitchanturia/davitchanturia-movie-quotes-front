import Circle from './UI/Circle';

const Language = () => {
  return (
    <div id='language' class='fixed left-10 top-1/2 transform -translate-y-1/2'>
      <Circle link='/' lang='en' />
      <Circle link='/' lang='ka' />
    </div>
  );
};

export default Language;
