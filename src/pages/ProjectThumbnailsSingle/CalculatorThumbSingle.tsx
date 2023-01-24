import { Box, Typography } from '@mui/material';
import CalculatorThumb from '../../images/calculator/calculator-eql.png'
import { Link } from 'react-router-dom';
import { ProjectData } from '../../components/types/ProjectsData';
import { routes } from '../../components/types/routes';


const CalculatorThumbSingle = () => {
  return (
    <div 
    className='ProjectThumb calculator'
    >
      {ProjectData.map(Project => {
        if (Project.thumbId === 'calculator') {
          return (
            <Link to={`${routes.project}/${Project.thumbId}`}>
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
