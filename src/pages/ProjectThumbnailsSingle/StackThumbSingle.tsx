import { Box, Typography } from '@mui/material';
import StackThumb from '../../images/stackover/top-page.png';
import { Link } from 'react-router-dom';
import { ProjectData } from '../../components/types/ProjectsData';
import { routes } from '../../components/types/routes';

const StackThumbSingle = () => {
  return (
    <div
    className='ProjectThumb stackOver'
    >
      {ProjectData.map(Project => {
        if (Project.thumbId === 'stackOver') {
          return (
            <Link to={`${routes.project}/${Project.thumbId}`}>
              <Box>
                <img
                  src={StackThumb}
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
export default StackThumbSingle;
