import axios from 'axios';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router';
import List from './pages/List';
import Main from './pages/Main';

function App() {
  const [movie, setMovie] = useState({});

  let isEmpty = Object.entries(movie).length === 0;

  useEffect(() => {
    axios
      .get('http://127.0.0.1:8000/api/random-movie')
      .then(function (response) {
        setMovie(response.data);
      });
  }, []);

  return (
    <Routes>
      {!isEmpty && <Route path='/' element={<Main data={movie} />} />}
      <Route path='/quotes' element={<List />} />
    </Routes>
  );
}

export default App;
