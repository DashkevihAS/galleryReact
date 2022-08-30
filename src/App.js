import { Routes, Route } from 'react-router';
import Header from './components/Header';
import Main from './components/Main';
// import { getToken } from './api/token';
// import { useToken } from './hooks/useToken';

function App() {
  // if (!localStorage.getItem('bearer')) {
  //   const token = getToken();
  //   console.log('token in App: ', token);
  // }

  // const code = new URLSearchParams(location.search)
  //   .get('code');
  // console.log('code', code);
  // const tokenRedux = useToken(code);
  // console.log('tokenRedux', tokenRedux);
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
