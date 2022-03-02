import { useEffect, useContext } from 'react';
import { Route, Routes } from 'react-router';
import { useTranslation } from 'react-i18next';

import List from './pages/List';
import Main from './pages/Main';
import AdminPanel from './pages/AdminPanel';

import Spinner from './components/UI/Spinner';
import useApi from './hooks/use-api';
import DataContext from './store/data-context';

function App() {
  const { t, i18n } = useTranslation();

  const dataCtx = useContext(DataContext);

  const httpData = useApi('main');
  const { isLoading, error, sendRequest } = httpData;

  useEffect(() => {
    sendRequest('getData');
  }, [sendRequest]);

  let isEmpty = Object.entries(dataCtx.movie).length === 0;

  return (
    <>
      {isLoading && <Spinner />}
      {error && (
        <p className='text-white text-lg text-center mt-32'>
          something went wrong, try another time!
        </p>
      )}
      <Routes>
        {!isEmpty && <Route path='/' element={<Main data={dataCtx.movie} />} />}
        {!isEmpty && (
          <Route path='/quotes' element={<List data={dataCtx.movie} />} />
        )}
        <Route path='/admin' element={<AdminPanel />} />
      </Routes>
    </>
  );
}

export default App;
