import axios from 'axios';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router';
import { useTranslation } from 'react-i18next';

import List from './pages/List';
import Main from './pages/Main';

function App() {
  const [movie, setMovie] = useState({});

  const { t, i18n } = useTranslation();

  let isEmpty = Object.entries(movie).length === 0;

  useEffect(() => {
    axios
      .get('http://127.0.0.1:8000/api/random-movie')
      .then(function (response) {
        setMovie(response.data);
      });
  }, []);

  return (
    <>
      {isEmpty && (
        <p className='text-white text-lg text-center mt-32'>
          something went wrong, try another time!
        </p>
      )}
      <Routes>
        {!isEmpty && <Route path='/' element={<Main data={movie} />} />}
        <Route path='/quotes' element={<List data={movie} />} />
      </Routes>
    </>
  );
}

export default App;
