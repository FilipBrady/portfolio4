import { Box, Typography } from '@mui/material';
import StackThumb from '../../images/stackover/top-page.png';
import { Link } from 'react-router-dom';
import { ProjectData } from '../../components/types/ProjectsData';
import { routes } from '../../components/types/routes';

const StackThumbSingle = () => {
  return (
    <div
    className='ProjectThumb Stack'
    // className='Sticky BackgroundDiff' style={{zIndex: 10}}
    >
      {ProjectData.map(Project => {
        if (Project.thumbId === 'stackOver') {
          return (
            // <Box className='ProjectsPage'>
            //   <Box className='ProjectBox'>
            //     <Typography variant='h4'>{Project.thumbHeader}</Typography>
            //     <Typography variant='h5'>{Project.thumbDesc}</Typography>
            //   </Box>
            <Link to={`${routes.project}/${Project.thumbId}`}>
              <Box>
                <img
                  src={StackThumb}
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
export default StackThumbSingle;
