import { useContext } from 'react';
import AdminContext from '../../store/admin-context';
import Grid from './content/grid';
import Welcome from './content/Welcome';

const Data = () => {
  const adminCtx = useContext(AdminContext);

  return (
    <div className='w-5/6 mr-20 pl-7 pt-7 mt-24'>
      {adminCtx.active === 'Home' && <Welcome />}
      {adminCtx.active !== 'Home' && <Grid />}
    </div>
  );
};

export default Data;
