
import './App.css';

import Navbar from './components/Navbar';
import React from "react";
import About from './components/About';
import Columns from './components/Columns';
import Magazines from './components/Magazines';



import {
  BrowserRouter as Router,

  Route,
  Routes
} from "react-router-dom";
import Home from './components/Home';
import Footer from './Footer';

function App() {
  return (
    <>
      <Router>
        <Navbar title="alfalah"></Navbar>
        <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/Magazines" element={<Magazines />} />
       
        <Route path="/Columns" element={<Columns />} /> 
        <Route path="/About" element={<About />} /> 
        
      
        <Route path="/Home" element={<Home />} /> 
        </Routes>
        <Footer />
      </Router>
      {/* <Blogs></Blogs> */}

    </>
  );
}

export default App;
