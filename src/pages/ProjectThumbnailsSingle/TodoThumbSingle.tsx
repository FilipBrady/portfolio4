import { Box, Typography } from '@mui/material';
import TodoThumb from '../../images/todoapp/today-todos-medium.png';
import { Link } from 'react-router-dom';
import { ProjectData } from '../../components/types/ProjectsData';
import { routes } from '../../components/types/routes';

const TodoThumbSingle = () => {
  const IMG = (imgName: any) => {
    return require(`../../images/${imgName}`);
  };
  return (
    <div
    className='ProjectThumb todo'
    >
      {ProjectData.map(Project => {
        if (Project.thumbId === 'todo') {
          return (
            <Link to={`${routes.project}/${Project.thumbId}`}>
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
    // <div>
    //   {ProjectData.map(Project => (
    //     <div className={`${Project.thumbId} ProjectThumb`}>
    //       <Link to={`${routes.project}/${Project.thumbId}`}>
    //         <Box>
    //           <img
    //             src={IMG(Project.thumbnail)}
    //             alt={Project.thumbHeader}
    //             className='ProjectThumbnailPhoto'
    //           />
    //         </Box>
    //       </Link>
    //     </div>
    //   ))}
    // </div>
  );
};
export default TodoThumbSingle;
