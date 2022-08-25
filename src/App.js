import { Routes, Route } from 'react-router';
import Header from './components/Header';
import Main from './components/Main';
import { getToken } from './api/token';

function App() {
  const token = getToken();
  console.log('token: ', token);

  return (
    <Routes>
      <Route path='*' element={
        <>
          <Header />
          <Main />
        </>
      }/>
    </Routes>
  );
}

export default App;
