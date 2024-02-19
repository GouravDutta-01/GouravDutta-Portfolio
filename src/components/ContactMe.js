import React from 'react';
import { Typography, List, ListItem, Paper, IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';

const ContactMe = () => {
  const links = [
    { url: 'https://github.com/GouravDutta-01', icon: <GitHubIcon style={{ color: 'white' }} /> },
    { url: 'https://www.linkedin.com/in/gourav-dutta-b85101253/', icon: <LinkedInIcon style={{ color: 'white' }} /> },
    { url: 'mailto:gouravdutta.gtb@gmail.com', icon: <EmailIcon style={{ color: 'white' }} /> },
    { url: 'https://instagram.com/gouravdutta_01', icon: <InstagramIcon style={{ color: 'white' }} /> },
  ];

  return (
    <div id="contact-me" style={{ textAlign: 'center', backgroundColor: '#1f2e54', color: 'white', paddingTop: '20px', paddingBottom: '20px' }}>
      <Paper elevation={0} style={{ padding: 20, backgroundColor: 'transparent', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography variant="body1" sx={{color: "white"}}>
          Feel free to connect with me
        </Typography>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <List style={{ display: 'flex', gap: '10px' }}>
            {links.map((link, index) => (
              <ListItem key={index} disableGutters style={{ textAlign: 'center' }}>
                <IconButton component="a" href={link.url} target="_blank" color="primary">
                  {link.icon}
                </IconButton>
              </ListItem>
            ))}
          </List>
        </div>
        <Typography variant="body2" color="textSecondary" style={{ marginTop: 'auto', color: '#6b6b6b' }}>
          Developed/Designed by Gourav Dutta &copy; 2024
        </Typography>
      </Paper>
    </div>
  );
};

export default ContactMe;
