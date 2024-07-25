import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import NavbarComponent from './components/NavbarComponent';
import FooterComponent from './components/FooterComponent';
import Home from './pages/Home';
import Moods from './pages/Moods';
import Contact from './pages/Contact';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <NavbarComponent />
        <Container className="text-center my-5">
          <Routes>
            <Route path="/" element={<Moods />} />
            <Route path="/moods" element={<Moods />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Container>
        <FooterComponent />
      </div>
    </Router>
  );
}

export default App;
