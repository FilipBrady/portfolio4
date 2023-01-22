import { Home } from '@mui/icons-material';
import { Box } from '@mui/material';
import { Link, Route, Routes } from 'react-router-dom';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Projects from '../pages/Projects';
import { routes } from './types/routes';

const TheNavigation = () => {
  return (
    <Box sx={{display: "flex", justifyContent: "space-between", color: "white", paddingX: 3, paddingY: 1, fontSize: "18px"}}>
      <Box>
        <Link className='LinkStyles' to={routes.home}>Home</Link>
        <Link className='LinkStyles' to={routes.about}>About</Link>
        <Link className='LinkStyles' to={routes.projects}>Projects</Link>
      </Box>
      <Box>
        <Link className='LinkStyles' to={routes.contact}>Contact</Link>
      </Box>
    </Box>
  );
};
export default TheNavigation;
