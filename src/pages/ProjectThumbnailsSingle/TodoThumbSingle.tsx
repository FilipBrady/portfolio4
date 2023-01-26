import { Box } from '@mui/material';
import TodoThumb from '../../images/ako thumbn/Todo-app3.png';
import { Link } from 'react-router-dom';
import { ProjectData } from '../../components/types/ProjectsData';
import { routes } from '../../components/types/routes';
import { useState } from 'react';

const TodoThumbSingle = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className='ProjectThumb todo' onMouseEnter={() => setIsHovered(true)} onMouseLeave={() =>setIsHovered(false)}>
      {ProjectData.map(Project => {
        if (Project.thumbId === 'todo') {
          return (
            <Link className='LearnMore' to={`${routes.project}/${Project.thumbId}`}>
              <div className={isHovered ? "LearnMoreBtn" : "DisplayNone"}>Learn More</div>
              <Box>
                <img
                  src={TodoThumb}
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
export default TodoThumbSingle;
