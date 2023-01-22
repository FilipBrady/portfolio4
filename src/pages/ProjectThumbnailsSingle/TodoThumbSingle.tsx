import { Box, Typography } from '@mui/material';
import TodoThumb from '../../images/todoapp/today-todos-medium.png'
import { Link } from 'react-router-dom';
import { ProjectData } from '../../components/types/ProjectsData';
import { routes } from '../../components/types/routes';

const TodoThumbSingle = () => {
  return (
    <div 
    className='ProjectThumb Todo'
    // className='Sticky BackgroundDiff' style={{zIndex: 10}}
    >
      {ProjectData.map(Project => {
        if (Project.thumbId === 'todo') {
          return (
            // <Box className='ProjectsPage'>
            //   <Box className='ProjectBox'>
            //     <Typography variant='h4'>{Project.thumbHeader}</Typography>
            //     <Typography variant='h5'>{Project.thumbDesc}</Typography>
            //   </Box>
            <Link to={`${routes.project}/${Project.thumbId}`}>
            <Box>
              <img
                src={TodoThumb}
                alt={Project.thumbHeader}
                className='ProjectThumbnailPhoto'
              />
            </Box>
          </Link>
            // </Box>
          );
        }
      })}
    </div>
  );
};
export default TodoThumbSingle;
