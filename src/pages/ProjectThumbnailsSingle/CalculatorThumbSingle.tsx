import { Box, Typography } from '@mui/material';
import CalculatorThumb from '../../images/calculator/calculator-eql.png'
import { Link } from 'react-router-dom';
import { ProjectData } from '../../components/types/ProjectsData';
import { routes } from '../../components/types/routes';


const CalculatorThumbSingle = () => {
  return (
    <div 
    className='ProjectThumb Calculator'
    // className='Sticky BackgroundDiff' style={{zIndex: 10}}
    >
      {ProjectData.map(Project => {
        if (Project.thumbId === 'calculator') {
          return (
            // <Box className='ProjectsPage'>
            //   <Box className='ProjectBox'>
            //     <Typography variant='h4'>{Project.thumbHeader}</Typography>
            //     <Typography variant='h5'>{Project.thumbDesc}</Typography>
            //   </Box>
            <Link to={`${routes.project}/${Project.thumbId}`}>
            <Box>
              <img
                src={CalculatorThumb}
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
export default CalculatorThumbSingle;
