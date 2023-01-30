import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { routes } from '../components/types/routes';

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
  const [isHovered, setIsHovered] = useState(false);
  const IMG = (imgName: any) => {
    return require(`../images/ako thumbn/${imgName}`);
  };
  return (
    <div
      className='ProjectThumb todo'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
        <Link className='LearnMore' to={`${routes.project}/${Project.thumbId}`}>
          <div className={isHovered ? 'LearnMoreBtn' : 'DisplayNone'}>
            Learn More
          </div>
          <Box>
            <img
              src={IMG(Project.thumbnail)}
              alt={Project.thumbHeader}
              className='ProjectThumbnailPhoto'
            />
          </Box>
        </Link>
    </div>
  );
};
export default ProjectThumbnail;
