import { Box, Typography } from '@mui/material';
import { ProjectData } from '../types/ProjectsData';
import CalculatorThumb from '../../images/calculator/calculator-eql.png'

const CalculatorAppThumb = () => {
  return (
    <div className='Sticky BackgroundDiff' style={{zIndex: 10}}>
      {ProjectData.map(Project => {
        if (Project.thumbId === 'calculator') {
          return (
            <Box className='ProjectsPage'>
              <Box className='ProjectBox'>
                <Typography variant='h4'>{Project.thumbHeader}</Typography>
                <Typography variant='h5'>{Project.thumbDesc}</Typography>
              </Box>
              <Box>
                <img
                  src={CalculatorThumb}
                  alt={Project.thumbHeader}
                  className='ProjectThumbnailPhoto'
                />
              </Box>
            </Box>
          );
        }
      })}
    </div>
  );
};
export default CalculatorAppThumb;
