import { Box, Typography } from '@mui/material';
import { ProjectData } from '../types/ProjectsData';
import StackThumb from '../../images/stackover/top-page.png'

const StackOverflowThumb = () => {
  return (
    <div className='Sticky BackgroundDiff' style={{zIndex: 10}}>
      {ProjectData.map(Project => {
        if (Project.thumbId === 'stackOver') {
          return (
            <Box className='ProjectsPage'>
              <Box className='ProjectBox'>
                <Typography variant='h4'>{Project.thumbHeader}</Typography>
                <Typography variant='h5'>{Project.thumbDesc}</Typography>
              </Box>
              <Box>
                <img
                  src={StackThumb}
                  alt={Project.thumbHeader}
                  className='ProjectThumbnailPhoto'
                />
              </Box>
            </Box>
          );
        }
      })}
    </div>
  );
};
export default StackOverflowThumb;
