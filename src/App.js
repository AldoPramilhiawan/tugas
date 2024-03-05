
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Headers from './components/Headers';
import Home from './components/Home';
import Perawat from './components/Perawat';
import TataTertib from './components/TataTertib';
import Dokter from './components/Dokter';
import AlurKomplain from './components/AlurKomplain';
import AdministrasiRuangan from './components/AdministrasiRuangan';
import SaranaPrasarana from './components/SaranaPrasarana';
import Edukasi from './components/Edukasi';

function App() {
  return (
    <>
    <Headers />
    <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/perawat" element={<Perawat />}/>
    <Route path="/dokter" element={<Dokter />}/>
    <Route path="/tata-tertib" element={<TataTertib />}/>
    <Route path="/sarana-prasarana" element={<SaranaPrasarana />}/>
    <Route path="/alur-komplain" element={<AlurKomplain />}/>
    <Route path="/administrasi-ruangan" element={<AdministrasiRuangan />}/>
    <Route path="/edukasi" element={<Edukasi />}/>
    </Routes>
      
      
    </>
  );
}

export default App;
