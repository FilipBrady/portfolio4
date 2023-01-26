import { Box, Typography } from '@mui/material';
// import StackThumb from '../../images/stackover/top-page.png';
import StackThumb from '../../images/ako thumbn/Group 162642.png';
import { Link } from 'react-router-dom';
import { ProjectData } from '../../components/types/ProjectsData';
import { routes } from '../../components/types/routes';
import { useState } from 'react';

const StackThumbSingle = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className='ProjectThumb todo' onMouseEnter={() => setIsHovered(true)} onMouseLeave={() =>setIsHovered(false)}>
      {ProjectData.map(Project => {
        if (Project.thumbId === 'stackOver') {
          return (
            <Link to={`${routes.project}/${Project.thumbId}`}>
              <div className={isHovered ? "LearnMoreBtn" : "DisplayNone"}>Learn More</div>
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
