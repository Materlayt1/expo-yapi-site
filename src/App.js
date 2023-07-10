import React from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Upheader from './components/Upheader';
import Cesme from './components/Cesme';
import Kusadasi from "./components/Kusadasi"
import Home from './components/Home';
import About from './components/About';
import { BsWhatsapp} from 'react-icons/bs';
import Basın from './components/Basın';

import './App.css';

const App = () => {

  return (
    <div className="App">
      <BrowserRouter>
        <Upheader /> 
        <Header />
        <a href="https://wa.me/905537110686?text=Merhaba,%20web%20sitenizden%20ulaşıyorum;%20"><BsWhatsapp className='wp text-color'/></a>
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/cesme-vilaları-proje" element={<Cesme />} />
          <Route path="/kusadasi-vilaları-proje" element={<Kusadasi />} />
          <Route path="/hakkimizda" element={<About />} />
          <Route path="/Basinda-biz" element={<Basın />} />



        </Routes>
       
      </BrowserRouter>

    </div>
  );
};

export default App;
