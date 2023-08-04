import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
  <>
    <Navbar />
    <Routes>
      <Route path='/portfolio/' element={<Home />}/>
      <Route path='/portfolio/about/' element={<About />}/>
    </Routes>
  </>
  );
}

export default App;
