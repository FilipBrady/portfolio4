import { Box } from '@mui/material';
import EshopThumb from '../../images/ako thumbn/Eshop.png';
import { Link } from 'react-router-dom';
import { ProjectData } from '../../components/types/ProjectsData';
import { routes } from '../../components/types/routes';
import { useState } from 'react';

const EshopThumbSingle = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className='ProjectThumb todo'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {ProjectData.map(Project => {
        if (Project.thumbId === 'eshop') {
          return (
            <Link to={`${routes.project}/${Project.thumbId}`}>
              <div className={isHovered ? 'LearnMoreBtn' : 'DisplayNone'}>
                Learn More
              </div>

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
