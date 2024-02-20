import React from 'react';
import { Typography, IconButton, useMediaQuery } from '@mui/material';
import { ReactTyped } from 'react-typed';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import backgroundImage from '../assets/bg.jpg';

const Header = () => {
  const typedStrings = [
    'Web Developer',
    'Java Programmer',
    'ML Enthusiast',
  ];

  const isSmallScreen = useMediaQuery('(max-width:780px)');

  return (
    <div
      id="home"
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingLeft: '40px',
        paddingRight: '20px',
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
      }}
    >
      <Typography variant="h6" style={{ fontFamily: 'Georgia, serif', fontSize: '1.5em' }}>
        Hello there! My name is
      </Typography>
      <Typography variant="h2" component="span" style={{ fontWeight: 'bold', fontSize: '4em', fontFamily: 'Roboto, sans-serif', marginTop: '10px' }}>
        Gourav Dutta
      </Typography>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          minHeight: '120px',
          marginTop: '10px',
          marginBottom: '10px',
        }}
      >
        <Typography
          component="span"
          variant="h2"
          style={{
            fontSize: isSmallScreen ? '1.2em' : '2em',
            fontWeight: 'bold',
            marginRight: '10px',
          }}
        >
          And I'm a
        </Typography>
        <ReactTyped
          strings={typedStrings}
          typeSpeed={40}
          backSpeed={50}
          loop
          showCursor={false}
          style={{ fontSize: isSmallScreen ? '1.2em' : '2em', fontWeight: 'bold', display: 'inline-block', color: '#34bc50' }}
        />
      </div>
      <div style={{ marginTop: '10px', display: 'flex', gap: '10px', paddingLeft: '10px' }}>
        <IconButton href="https://github.com/GouravDutta-01" target="_blank">
          <GitHubIcon style={{ fontSize: '1.5em', color: 'white' }} />
        </IconButton>
        <IconButton href="https://www.linkedin.com/in/gourav-dutta-b85101253/" target="_blank">
          <LinkedInIcon style={{ fontSize: '1.5em', color: 'white' }} />
        </IconButton>
        <IconButton href="mailto:gouravdutta.gtb@gmail.com">
          <EmailIcon style={{ fontSize: '1.5em', color: 'white' }} />
        </IconButton>
        <IconButton href="https://instagram.com/gouravdutta_01" target="_blank">
          <InstagramIcon style={{ fontSize: '1.5em', color: 'white' }} />
        </IconButton>
      </div>
    </div>
  );
};

export default Header;
