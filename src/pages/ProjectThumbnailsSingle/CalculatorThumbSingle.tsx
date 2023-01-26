import { Box } from '@mui/material';
import CalculatorThumb from '../../images/ako thumbn/Calculator2.png';
import { Link } from 'react-router-dom';
import { ProjectData } from '../../components/types/ProjectsData';
import { routes } from '../../components/types/routes';
import { useState } from 'react';

const CalculatorThumbSingle = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className='ProjectThumb todo'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {ProjectData.map(Project => {
        if (Project.thumbId === 'calculator') {
          return (
            <Link to={`${routes.project}/${Project.thumbId}`}>
              <div className={isHovered ? 'LearnMoreBtn' : 'DisplayNone'}>
                Learn More
              </div>

              <Box>
                <img
                  src={CalculatorThumb}
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
export default CalculatorThumbSingle;
