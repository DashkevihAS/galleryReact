// import { useEffect } from 'react';
import { Routes, Route } from 'react-router';
import Header from './components/Header';
import Main from './components/Main';
// import { useToken } from './hooks/useAuth';


function App() {
  const code = new URLSearchParams(location.search)
    .get('code');
  console.log(code);

  // const [token] = useToken(code);
  // console.log(token);
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
