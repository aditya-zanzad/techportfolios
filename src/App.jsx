import React from 'react'
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom';
import Header from './Component/Header';
import './Styles/App.scss';
import './Styles/Header.scss';
import Home from './Component/Home';
import Footer from './Component/Footer';
import Contact from './Component/Contact';
import Services from './Component/Services';
const App = () => {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/services" element={<Services/>} />
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App