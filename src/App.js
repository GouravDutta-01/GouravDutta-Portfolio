import React from 'react';
import './index.css';
import { CssBaseline } from '@mui/material';
import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import ContactMe from './components/ContactMe';
import ScrollToTop from './components/ScrollToTop';
import Header from './components/Header';

function App() {
  return (
    <>
      <CssBaseline />
      <Navbar  />
      <Header />
      <AboutMe />
      <Projects />
      <ContactMe />
      <ScrollToTop />
    </>
  );
}

export default App;
