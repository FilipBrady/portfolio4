import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import ProjectThumbnail from '../components/ProjectThumbnail';
import CalculatorAppThumb from '../components/ProjectThumbnails/CalculatorAppThumb';
import EshopAppThumb from '../components/ProjectThumbnails/EshopAppThumb';
import SpendingAppThumb from '../components/ProjectThumbnails/SpendingAppThumb';
import StackOverflowThumb from '../components/ProjectThumbnails/StackOverflowThumb';
import TodoAppThumb from '../components/ProjectThumbnails/TodoAppThumb';
import { ProjectData } from '../components/types/ProjectsData';
import CalculatorThumbSingle from './ProjectThumbnailsSingle/CalculatorThumbSingle';
import EshopThumbSingle from './ProjectThumbnailsSingle/EshopThumbSingle';
import SpendingThumbSingle from './ProjectThumbnailsSingle/SpendingThumbSingle';
import StackThumbSingle from './ProjectThumbnailsSingle/StackThumbSingle';
import TodoThumbSingle from './ProjectThumbnailsSingle/TodoThumbSingle';

const Projects = () => {
  return (
    <div>
      {/* <TodoAppThumb />
      <CalculatorAppThumb />
      <EshopAppThumb />
      <SpendingAppThumb />
      <StackOverflowThumb /> */}

      {/* contact site: */}
      <Box
        sx={{
          minHeight: '150vh',
          background: '#313030',
          position: 'sticky',
          top: 0,
          zIndex: 10,
          paddingTop: 5
        }}
        className='Projects'
      >
        <Typography variant='h4'>My Work</Typography>
        <ParallaxProvider>
          <Parallax scale={[1.2, 1]} speed={20}>
            <TodoThumbSingle />
          </Parallax>
          <Parallax scale={[1.2, 1]} speed={15}>
            <CalculatorThumbSingle />
          </Parallax>
          <Parallax scale={[1.2, 1]} speed={30}>
            <EshopThumbSingle />
          </Parallax>
          <Parallax scale={[1.2, 1]} speed={-5}>
            <SpendingThumbSingle />
          </Parallax>
          <Parallax scale={[1.2, 1]} speed={-10}>
            <StackThumbSingle />
          </Parallax>
        </ParallaxProvider>
      </Box>
    </div>
  );
};
export default Projects;
