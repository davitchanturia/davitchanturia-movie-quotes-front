import { Link } from 'react-router-dom';
import Language from '../components/Language';
import Card from '../components/UI/Card';

const List = () => {
  return (
    <section>
      <div className='mt-10 ml-10'>
        <Link to='/' className='text-white capitalize '>
          go back
        </Link>
      </div>
      <div className='max-w-md  m-auto'>
        <h1 className='mt-10 capitalize text-white'> movie name </h1>
        <Card />
      </div>
      <Language />
    </section>
  );
};

export default List;
