import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from './components/MainPage';

import React from 'react'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

import './App.css';

function App() {
  return (
    <div>
      <Router>
        <Routes>
        <Route exact path="/" element={<MainPage />} />
        <Route exact path="/About" element={<Skills />} />
        <Route exact path="/Experience" element={<Experience />} />
        <Route exact path="/Projects" element={<Projects />} />
        <Route exact path="/Contact" element={<Contact />} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
