import React from 'react';
import NavBar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home'
import Destiny from './components/pages/Destiny';
import Gallery from './components/pages/Gallery';
import SignUp from './components/pages/SignUp';


function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/Destiny' exact element={<Destiny />} />
          <Route path='/Gallery' exact element={<Gallery />} />
          <Route path='/sign-up' exact element={<SignUp />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
