
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Headers from './components/Headers';
import Home from './components/Home';
import Perawat from './components/Perawat';

function App() {
  return (
    <>
    <Headers />
    <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/perawat" element={<Perawat />}/>
    </Routes>
      
      
    </>
  );
}

export default App;
