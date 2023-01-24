import About from './About';
import Home from './Home';
import Projects from './Projects';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import MailIcon from '@mui/icons-material/Mail';
import { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';

const Contact = () => {
  
  return (
    <Box sx={{ position: 'relative' }}>
      <Box sx={{ height: '100vh', zIndex: 2 }}>
        <Home />
      </Box>
      <Box
        sx={{
          minHeight: '100vh',
          background: '#313030',
          position: 'sticky',
          top: 0,
          zIndex: 10,
          paddingTop: 5,
        }}
>
        <About />
      </Box>
      <Box>
        <Projects />
      </Box>
      <Box
        sx={{
          height: 'fit-content',
          background: '#313030',
          position: 'sticky',
          zIndex: 50,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignContent: 'center',
          flexWrap: 'wrap',
          paddingY: '50px',
        }}
      >
        <Typography variant='h5' sx={{ marginTop: 3 }}>
          If you like my work, do not hasitate to contact me
        </Typography>
        <Box>
          <ul className='footerSocMedia'>
            <li>
              <a
                href='https://github.com/Fiiillliiippp'
                target={'_blank'}
                rel='noreferrer'
              >
                <GitHubIcon sx={{ fontSize: '4rem' }} />
              </a>
            </li>
            <li>
              <a
                href='https://www.linkedin.com/in/filip-br%C3%A1dy-332560237/'
                target={'_blank'}
                rel='noreferrer'
              >
                <LinkedInIcon sx={{ fontSize: '4rem' }} />
              </a>
            </li>
            <li>
              <a
                href='https://www.instagram.com/f._.brady/'
                target={'_blank'}
                rel='noreferrer'
              >
                <InstagramIcon sx={{ fontSize: '4rem' }} />
              </a>
            </li>
            <li>
              <a
                href='mailto:filipbrady@gmail.com'
                target={'_blank'}
                rel='noreferrer'
              >
                <MailIcon sx={{ fontSize: '4rem' }} />
              </a>
            </li>
          </ul>
        </Box>
        <Box></Box>
      </Box>
    </Box>
  );
};
export default Contact;
