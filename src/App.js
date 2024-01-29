import React from 'react';
import Home from './pages/Home';
import Menu from './pages/Menu';
import {Routes, Route, useLocation, Link } from 'react-router-dom';
import logo from './data/logo.png';
import { AnimatePresence } from 'framer-motion';
const App = () => {
  const location = useLocation();
  return (
    <div className>
      <div className='header'>
        <Link to='/'>
          <img height="250" src={logo} alt="Brijwasi Sweet House" className='logo'/>
        </Link>
      </div>
      <AnimatePresence mode='wait'>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/menu/:category" element={<Menu />} />
        <Route path="*" element={<Home />}/>
      </Routes>
      <div className='footer'>
        <p>&copy; 2024 Brijwasi Sweet House</p>
        <div className='cite'>
        <a href="https://www.freepik.com/free-vector/brown-mandala-pattern-background_1183921.htm#fromView=search&term=brown+traditional&track=ais&regularType=vector&page=1&position=52&uuid=5a1bb86f-b9e2-491a-ab87-707731b57f1b">Image by Kerfin7</a> on Freepik
        </div>
      </div>

      </AnimatePresence>
    </div>
  );
}

export default App;

