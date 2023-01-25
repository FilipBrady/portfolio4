import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
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
          <Parallax scale={[1.2, 1]} speed={10}>
            <CalculatorThumbSingle />
          </Parallax>
          <Parallax scale={[1.2, 1]} speed={20}>
            <EshopThumbSingle />
          </Parallax>
          <Parallax scale={[1.2, 1]} speed={5}>
            <SpendingThumbSingle />
          </Parallax>
          <Parallax scale={[1.2, 1]} speed={5}>
            <StackThumbSingle />
          </Parallax>
        </ParallaxProvider>
      </Box>
      {/* <Box
        sx={{
          minHeight: '150vh',
          background: '#313030',
          position: 'sticky',
          top: 0,
          zIndex: 10,
          paddingTop: 5,
        }}
        className='Projects'
      >
        <Box>
          <Typography variant='h4'>My Work</Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignContent: 'center',
            flexWrap: 'wrap',
          }}
        >
          <TodoThumbSingle />
          <CalculatorThumbSingle />
          <EshopThumbSingle />
          <SpendingThumbSingle />
          <StackThumbSingle />
        </Box>
      </Box> */}
    </div>
  );
};
export default Projects;