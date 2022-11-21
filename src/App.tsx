import { Routes, Route } from 'react-router';
import { Layout } from './components/Layout/Layout';
import Main from './components/Main';
import { Error } from './components/Main/Error/Error';
import { Photo } from './components/Main/PhotoPage/PhotoPage';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Main />} />
          <Route path='/search/:value' element={<Main />} />
          <Route path='/likes' element={<Main />} />
          <Route path='/:id' element={<Photo />} />
          <Route path='*' element={<Error />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
