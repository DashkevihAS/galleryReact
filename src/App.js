import { Routes, Route } from 'react-router';
import Header from './components/Header';
import Main from './components/Main';

function App() {
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
