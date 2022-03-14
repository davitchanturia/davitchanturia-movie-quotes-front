import { useContext } from 'react';
import AdminContext from '../../store/admin-context';
import Grid from './content/grid';
import Welcome from './content/Welcome';

const Data = () => {
  const adminCtx = useContext(AdminContext);

  return (
    <div className='w-full lg:w-5/6 px-1 lg:px-7 py-7 lg:mt-24'>
      {adminCtx.active === 'Home' && <Welcome />}
      {adminCtx.active !== 'Home' && <Grid />}
    </div>
  );
};

export default Data;
