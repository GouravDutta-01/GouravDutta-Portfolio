import React, { useState } from 'react';
import { CssBaseline, Drawer } from '@mui/material';
import Navbar from './components/Navbar';
import DrawerList from './components/DrawerList';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import ContactMe from './components/ContactMe';
import ScrollToTop from './components/ScrollToTop';
import Header from './components/Header';

function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => {
    setDrawerOpen(open);
  };

  return (
    <>
      <CssBaseline />
      <Navbar toggleDrawer={toggleDrawer} />
      <Drawer anchor="right" open={drawerOpen} onClose={() => toggleDrawer(false)}>
        {drawerOpen && <DrawerList toggleDrawer={toggleDrawer} />}
      </Drawer>
      <Header />
      <AboutMe />
      <Projects />
      <ContactMe />
      <ScrollToTop />
    </>
  );
}

export default App;
