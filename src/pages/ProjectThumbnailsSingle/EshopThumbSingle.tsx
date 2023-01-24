import { Box, Typography } from '@mui/material';
import EshopThumb from '../../images/eshop/thumbnail.png'
import { Link } from 'react-router-dom';
import { ProjectData } from '../../components/types/ProjectsData';
import { routes } from '../../components/types/routes';

const EshopThumbSingle = () => {
  return (
    <div 
    className='ProjectThumb eshop'
    >
      {ProjectData.map(Project => {
        if (Project.thumbId === 'eshop') {
          return (
            <Link to={`${routes.project}/${Project.thumbId}`}>
            <Box>
              <img
                src={EshopThumb}
                alt={Project.thumbHeader}
                className='ProjectThumbnailPhoto'
              />
            </Box>
          </Link>
          );
        }
      })}
    </div>
  );
};
export default EshopThumbSingle;
