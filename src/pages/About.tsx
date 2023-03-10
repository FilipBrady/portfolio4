import { Box, Typography } from '@mui/material';
import { useState, useEffect } from 'react';

const About = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    if (window.innerWidth > 1200) {
      const handleScroll = () => setScrollY(window.scrollY);
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
    if (window.innerWidth < 1200) {
      setScrollY(0);
    }
  }, []);

  return (
    <div className='AboutContent'>
      <Box className='ContentBox'>
        <Box className={scrollY > 550 ? 'Fixed' : 'TextBoxAbout'}>
          <Typography variant='h6' sx={{ paddingBottom: 1 }}>
            You can download my CV{' '}
            <a
              className='AboutLinks'
              href='../Does it work.docx'
              download='Filip-Brady-CV.docx'
            >
              here.
            </a>
          </Typography>
          <Typography variant='h6'>
            Courently I am working on a Start-Up as a manager of a advertising
            site. I learned how to run Google Ads, Meta Ads, design posts for
            social media in Figma, analize data from Google Analytics. However I
            was allways more excited about coding websites so I started learning
            Frontend development. Courently I am Junior Developer learning React
            js. I have some projects done as you can see in "My Projects"
            section. I am located in Maastricht, Netherlands but I have no
            problem working from home.
          </Typography>
          <Typography variant='h6' sx={{ paddingTop: 2 }}>
            How can you contact me:
          </Typography>
          <Typography variant='h6'>
            In case you like my work and you are interested in working with me,
            you can contact me throughout my{' '}
            <a
              className='AboutLinks'
              href='mailto:filipbrady@gmail.com'
              target={'_blank'}
              rel='noreferrer'
            >
              Email
            </a>
            ,{' '}
            <a
              className='AboutLinks'
              href='https://www.linkedin.com/in/filip-br%C3%A1dy-332560237/'
              target={'_blank'}
              rel='noreferrer'
            >
              LinkedIn
            </a>{' '}
            or{' '}
            <a
              className='AboutLinks'
              href='https://www.facebook.com/filip.brady/'
              target={'_blank'}
              rel='noreferrer'
            >
              Facebook
            </a>
            . You can look at my work on my{' '}
            <a
              className='AboutLinks'
              href='https://github.com/Fiiillliiippp'
              target={'_blank'}
              rel='noreferrer'
            >
              Github
            </a>{' '}
            (alltough most of my projects are private).
          </Typography>
        </Box>
      </Box>
    </div>
  );
};
export default About;
