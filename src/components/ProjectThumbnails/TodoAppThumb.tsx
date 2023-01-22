import { Box, Typography } from '@mui/material';
import { ProjectData } from '../types/ProjectsData';
import TodoThumb from '../../images/todoapp/today-todos-thumb.png'

const TodoAppThumb = () => {
  return (
    <div className='Sticky BackgroundDiff' style={{zIndex: 10}}>
      {ProjectData.map(Project => {
        if (Project.thumbId === 'todo') {
          return (
            <Box className='ProjectsPage'>
              <Box className='ProjectBox'>
                <Typography variant='h4'>{Project.thumbHeader}</Typography>
                <Typography variant='h5'>{Project.thumbDesc}</Typography>
              </Box>
              <Box>
                <img
                  src={TodoThumb}
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
export default TodoAppThumb;
