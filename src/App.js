import { Route, Routes } from 'react-router';
import List from './pages/List';
import Main from './pages/Main';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/quotes' element={<List />} />
    </Routes>
  );
}

export default App;
