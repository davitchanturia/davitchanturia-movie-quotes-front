import { useEffect, useContext } from 'react';
import { Navigate, Route, Routes } from 'react-router';
import { useTranslation } from 'react-i18next';

import List from './pages/List';
import Main from './pages/Main';
import AdminPanel from './pages/AdminPanel';

import Spinner from './components/UI/Spinner';
import useApi from './hooks/use-api';
import DataContext from './store/data-context';
import Login from './components/Login';
import AdminContext from './store/admin-context';

function App() {
  const { t, i18n } = useTranslation();

  const dataCtx = useContext(DataContext);
  const adminCtx = useContext(AdminContext);

  const httpData = useApi('main');
  const { isLoading, error, sendRequest } = httpData;

  useEffect(() => {
    sendRequest('getData');
  }, [sendRequest]);

  let isEmpty = Object.entries(dataCtx.movie).length === 0;

  // const isLoggedIn = localStorage.getItem('isLoggedIn');

  // console.log(isLoggedIn);

  return (
    <>
      {isLoading && <Spinner />}
      {error && (
        <p className='text-white w-full text-lg text-center absolute top-32'>
          something went wrong, try another time!
        </p>
      )}
      <Routes>
        {!isEmpty && <Route path='/' element={<Main data={dataCtx.movie} />} />}
        {!isEmpty && (
          <Route path='/quotes' element={<List data={dataCtx.movie} />} />
        )}
        <Route path='/admin' element={<AdminPanel />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
