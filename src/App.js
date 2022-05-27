import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Top from './view/Top';
import Watch from './view/Watch';
import NoMatch from './view/NoMatch';
import Recommendations from './view/Recommendation';
import Search from './view/Search';
import Details from './view/Details';
import Footer from './components/Footer';

function App() {

  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Top />} />
          <Route path="watch" element={<Watch />} />
          <Route path="recommendations" element={<Recommendations />} />
          <Route path="search/:query" element={<Search />} />
          <Route path="details/:mal_id" element={<Details />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
