import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Photography from './pages/Photography';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/photography" element={<Photography />} />
          </Routes>
        </main>
        <footer className="App-footer">
          <p>&copy; 2023 My Website. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;