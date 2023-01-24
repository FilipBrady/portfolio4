import { Box, Typography } from '@mui/material';
import SpendingThumb from '../../images/Spendings/Dashboard.png'
import { Link } from 'react-router-dom';
import { ProjectData } from '../../components/types/ProjectsData';
import { routes } from '../../components/types/routes';

const SpendingThumbSingle = () => {
  return (
    <div  
    className='ProjectThumb spending'
    >
      {ProjectData.map(Project => {
        if (Project.thumbId === 'spending') {
          return (
            <Link to={`${routes.project}/${Project.thumbId}`}>
            <Box>
              <img
                src={SpendingThumb}
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
export default SpendingThumbSingle;
