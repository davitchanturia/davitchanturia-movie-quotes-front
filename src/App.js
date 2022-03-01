import { useEffect } from 'react';
import { Route, Routes } from 'react-router';
import { useTranslation } from 'react-i18next';

import List from './pages/List';
import Main from './pages/Main';
import Spinner from './components/UI/Spinner';
import useApi from './hooks/use-api';

function App() {
  const { t, i18n } = useTranslation();

  const httpData = useApi('main');
  const { movie, isLoading, error, sendRequest } = httpData;

  useEffect(() => {
    sendRequest('getData');
  }, [sendRequest]);

  let isEmpty = Object.entries(movie).length === 0;

  return (
    <>
      {isLoading && <Spinner />}
      {error && (
        <p className='text-white text-lg text-center mt-32'>
          something went wrong, try another time!
        </p>
      )}
      <Routes>
        {!isEmpty && <Route path='/' element={<Main data={movie} />} />}
        {!isEmpty && <Route path='/quotes' element={<List data={movie} />} />}
      </Routes>
    </>
  );
}

export default App;
