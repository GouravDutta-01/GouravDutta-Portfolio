import React from 'react';
import { List, ListItemButton, ListItemText, IconButton } from '@mui/material';
import { Link as ScrollLink } from 'react-scroll';
import CloseIcon from '@mui/icons-material/Close';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import WorkIcon from '@mui/icons-material/Work';
import MailIcon from '@mui/icons-material/Mail';

const DrawerList = ({ toggleDrawer }) => {
  const handleClose = () => {
    toggleDrawer(false);
  };

  return (
    <div style={{ backgroundColor: '#10283f', color: 'white', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative' }}>
      <IconButton
        style={{ position: 'absolute', top: 0, right: 0, color: 'white', paddingRight: '20px', zIndex: 1 }}
        onClick={handleClose}
      >
        <CloseIcon />
      </IconButton>
      <List style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '50px', zIndex: 0 }}>
        {[
          { text: 'HOME', target: 'home', icon: <HomeIcon sx={{ color: 'white' }} /> },
          { text: 'ABOUT ME', target: 'about-me', icon: <PersonIcon sx={{ color: 'white' }} /> },
          { text: 'PROJECTS', target: 'projects', icon: <WorkIcon sx={{ color: 'white' }} /> },
          { text: 'CONTACT ME', target: 'contact-me', icon: <MailIcon sx={{ color: 'white' }} /> },
        ].map((item, index) => (
          <ScrollLink
            key={item.text}
            to={item.target}
            smooth={true}
            duration={500}
            offset={-50}
            style={{ textDecoration: 'none', width: '100%' }}
          >
            <ListItemButton
              onClick={handleClose}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
                paddingLeft: '20px', 
                color: 'white',
                marginBottom: '15px',
              }}
            >
              {item.icon}
              <ListItemText primary={item.text} sx={{ marginLeft: '50px' }} />
            </ListItemButton>
          </ScrollLink>
        ))}
      </List>
    </div>
  );
};

export default DrawerList;
