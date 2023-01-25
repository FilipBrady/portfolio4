import { Button, Tooltip, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useParams } from 'react-router-dom';
import { ProjectData } from '../components/types/ProjectsData';
import GitHubIcon from '@mui/icons-material/GitHub';
import { useState } from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Calculator from '../components/CalculatorApp/Calculator';

const Project = () => {
  const [photoCount, setPhotoCount] = useState(0);
  const { id } = useParams();
  const IMG = (imgName: any) => {
    return require(`../images/${imgName}`);
  };
  const handleNextPhoto = (maxPhotos: number) => {
    if (photoCount === maxPhotos - 1) {
      setPhotoCount(photoCount);
    } else {
      setPhotoCount(photoCount + 1);
    }
  };
  const handlePreviousPhoto = () => {
    if (photoCount !== 0) {
      setPhotoCount(photoCount - 1);
    }
  };

  return (
    <div>
      {ProjectData.map(project => {
        if (project.thumbId === id && project.thumbId !== "calculator") {
          return (
            <Box sx={{ padding: 2, paddingBottom: 4 }}>
              <Box sx={{ textAlign: 'center', paddingY: 2 }}>
                <Typography variant='h5' sx={{ paddingTop: 2 }}>
                  {project.thumbHeader}
                </Typography>
                <Typography variant='h6'>{project.thumbDesc}</Typography>
                <Tooltip
                  title='Full code on Github'
                  placement='left'
                  enterDelay={10}
                  leaveDelay={500}
                >
                  <Typography
                    variant='h2'
                    sx={{ marginY: 2, width: 'fit-content', marginX: 'auto' }}
                  >
                    {' '}
                    <a
                      href={project.MoreBtnLink}
                      style={{ color: 'white', textDecoration: 'none' }}
                    >
                      <GitHubIcon sx={{ fontSize: '5rem' }} />
                    </a>{' '}
                  </Typography>
                </Tooltip>
              </Box>

              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  justifyContent: 'space-around',
                  alignItems: 'center',
                  height: 'fit-content',
                }}
              >
                <Typography
                  variant='h6'
                  sx={{ maxWidth: '450px', paddingBottom: 4 }}
                >
                  {project.projectDescription[photoCount].label}
                </Typography>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <Button
                    sx={{ color: 'white' }}
                    disabled={photoCount === 0}
                    onClick={handlePreviousPhoto}
                  >
                    <ArrowBackIosNewIcon />{' '}
                  </Button>
                  <Box className='ProjectImg'>
                    <img
                      alt={project.thumbDesc}
                      src={IMG(project.projectDescription[photoCount].photo)}
                      style={{ maxWidth: '500px', borderRadius: '25px' }}
                    />
                  </Box>
                  <Button
                    sx={{ color: 'white' }}
                    disabled={
                      photoCount === project.projectDescription.length - 1
                    }
                    onClick={() =>
                      handleNextPhoto(project.projectDescription.length)
                    }
                  >
                    {' '}
                    <ArrowForwardIosIcon />{' '}
                  </Button>
                </Box>
              </Box>
            </Box>
          );
        } else if(project.thumbId === "calculator") {
          return (
            <Box sx={{ padding: 2, paddingBottom: 4 }}>
              <Box sx={{ textAlign: 'center', paddingY: 2 }}>
                <Typography variant='h5' sx={{ paddingTop: 2 }}>
                  {project.thumbHeader}
                </Typography>
                <Typography variant='h6'>{project.thumbDesc}</Typography>
                <Tooltip
                  title='Full code on Github'
                  placement='left'
                  enterDelay={10}
                  leaveDelay={500}
                >
                  <Typography
                    variant='h2'
                    sx={{ marginY: 2, width: 'fit-content', marginX: 'auto' }}
                  >
                    {' '}
                    <a
                      href={project.MoreBtnLink}
                      style={{ color: 'white', textDecoration: 'none' }}
                    >
                      <GitHubIcon sx={{ fontSize: '5rem' }} />
                    </a>{' '}
                  </Typography>
                </Tooltip>
              </Box>

              {/* <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  justifyContent: 'space-around',
                  alignItems: 'center',
                  height: 'fit-content',
                }}
              >
                <Typography
                  variant='h6'
                  sx={{ maxWidth: '450px', paddingBottom: 4 }}
                >
                  {project.projectDescription[photoCount].label}
                </Typography>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <Button
                    sx={{ color: 'white' }}
                    disabled={photoCount === 0}
                    onClick={handlePreviousPhoto}
                  >
                    <ArrowBackIosNewIcon />{' '}
                  </Button>
                  <Box className='ProjectImg'>
                    <img
                      alt={project.thumbDesc}
                      src={IMG(project.projectDescription[photoCount].photo)}
                      style={{ maxWidth: '500px', borderRadius: '25px' }}
                    />
                  </Box>
                  <Button
                    sx={{ color: 'white' }}
                    disabled={
                      photoCount === project.projectDescription.length - 1
                    }
                    onClick={() =>
                      handleNextPhoto(project.projectDescription.length)
                    }
                  >
                    {' '}
                    <ArrowForwardIosIcon />{' '}
                  </Button>
                </Box>
              </Box> */}
              <Calculator />
            </Box>
          )
        }
      })}
    </div>
  );
};
export default Project;
