import logo from './logo.svg';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
      <Router>
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes>
            
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>

  );
}

export default App;
