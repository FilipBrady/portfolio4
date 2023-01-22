import { Box, Typography } from '@mui/material';
import EshopThumb from '../../images/eshop/thumbnail.png'
import { Link } from 'react-router-dom';
import { ProjectData } from '../../components/types/ProjectsData';
import { routes } from '../../components/types/routes';

const EshopThumbSingle = () => {
  return (
    <div 
    className='ProjectThumb Eshop'
    // className='Sticky BackgroundDiff' 
    // style={{zIndex: 10}}
    >
      {ProjectData.map(Project => {
        if (Project.thumbId === 'eshop') {
          return (
            // <Box className='ProjectsPage'>
            //   <Box className='ProjectBox'>
            //     <Typography variant='h4'>{Project.thumbHeader}</Typography>
            //     <Typography variant='h5'>{Project.thumbDesc}</Typography>
            //   </Box>
            <Link to={`${routes.project}/${Project.thumbId}`}>
            <Box>
              <img
                src={EshopThumb}
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
export default EshopThumbSingle;
