import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Top from './view/Top';
import Watch from './view/Watch';
import NoMatch from './view/NoMatch';

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Top />} />
          <Route path="watch" element={<Watch />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
