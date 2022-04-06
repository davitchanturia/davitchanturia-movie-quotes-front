import { useEffect, useContext } from 'react';
import { Route, Routes } from 'react-router';
import { useTranslation } from 'react-i18next';

import List from 'pages/List/List';
import Main from 'pages/Main/Main';
import AdminPanel from 'pages/Admin/AdminPanel';

import Spinner from 'components/Spinner';
import useApi from 'hooks/useApi';
import DataContext from 'store/dataContext';
import Login from 'pages/Login/Login';

function App() {
  const { t, i18n } = useTranslation();

  const dataCtx = useContext(DataContext);

  const httpData = useApi('getData');
  const { isLoading, error, sendRequest } = httpData;

  useEffect(() => {
    sendRequest('api/random-movie');

    const activeLanguage = localStorage.getItem('language');
    if (activeLanguage) {
      i18n.changeLanguage(activeLanguage);
    } else {
      i18n.changeLanguage('en');
    }
  }, [sendRequest]);

  let isEmpty = Object.entries(dataCtx.movie).length === 0;

  return (
    <>
      {isLoading && <Spinner />}
      {error && (
        <p className='text-gray-100 w-full text-lg text-center absolute top-32'>
          {error}
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
