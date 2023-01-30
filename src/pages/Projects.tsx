import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useEffect, useRef, useState } from 'react';
import { ProjectData } from '../components/types/ProjectsData';
import ProjectThumbnail from './ProjectThumbnail';
import CalculatorThumbSingle from './ProjectThumbnailsSingle/CalculatorThumbSingle';
import EshopThumbSingle from './ProjectThumbnailsSingle/EshopThumbSingle';
import SpendingThumbSingle from './ProjectThumbnailsSingle/SpendingThumbSingle';
import StackThumbSingle from './ProjectThumbnailsSingle/StackThumbSingle';
import TodoThumbSingle from './ProjectThumbnailsSingle/TodoThumbSingle';

const Projects = () => {
  return (
    <div>
      <Box
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
        <Box sx={{ marginX: 2 }}>
          <Typography variant='h4' sx={{ padding: 2 }}>
            My Work
          </Typography>
        </Box>
        <Box
          sx={{
            marginTop: 2,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignContent: 'center',
            flexWrap: 'wrap',
            gap: "5px"
          }}
        >
          {ProjectData.map(Project => (
            <ProjectThumbnail key={Project.id} Project={Project} />
          ))}
          {/* <TodoThumbSingle />
          <CalculatorThumbSingle />
          <EshopThumbSingle />
          <SpendingThumbSingle />
          <StackThumbSingle /> */}
        </Box>
      </Box>
    </div>
  );
};
export default Projects;
