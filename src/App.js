import { Route, Routes } from 'react-routs-dom';
import './App.scss';
import Home from './pages/home/Home';
import About from './pages/about/About';

function App() {
  return (
    <Routs>
      <Route src='/' element={<Home />}/>
      <Route src='/about' element={<About />}/>
    </Routs>
  );
}

export default App;
