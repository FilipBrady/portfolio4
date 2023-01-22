import { Box, CardMedia } from '@mui/material';
import { Link } from 'react-router-dom';
import { routes } from './types/routes';

type Props = {
  Project: {
    id: number;
    projectDescription: {
      label: string;
      photo: string;
    }[];
    gistId: string;
    gistFile: string;
    MoreBtnLink: string;
    thumbnail: string;
    thumbDesc: string;
    thumbHeader: string;
    thumbId: string;
    projectId: string;
  };
};
const ProjectThumbnail = ({ Project }: Props) => {
  const Image = "../images"
  const IMG = (imgName: any) => {
    return require(`${Image}/${imgName}`)
  };
  console.log(IMG(Project.thumbnail));

  return (
    <Box className='ProjectsPage'>
      <Link to={`${routes.project}/${Project.thumbId}`}>
        <Box>
        <CardMedia
          component='img'
          height='200px'
          image={IMG(Project.thumbnail)}
          alt={Project.thumbDesc}
        />
        </Box>
      </Link>
    </Box>
  );
};
export default ProjectThumbnail;
