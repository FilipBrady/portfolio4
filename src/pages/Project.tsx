import { Button, Tooltip, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useParams } from 'react-router-dom';
import { ProjectData } from '../components/types/ProjectsData';
import GitHubIcon from '@mui/icons-material/GitHub';
import { useState } from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Calculator from '../components/CalculatorApp/Calculator';
import HomeIcon from '@mui/icons-material/Home';
import { routes } from '../components/types/routes';
import { Link } from 'react-router-dom';

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
      <Link to={routes.contact}>
      <Button sx={{position: "absolute", top: "1%", left: "1%", color: "white"}}><HomeIcon sx={{fontSize: "25px"}} /></Button>
      </Link>
      {ProjectData.map(project => {
        if (project.thumbId === id) {
          if (project.thumbId !== 'calculator') {
            return (
              <Box sx={{ paddingX: 2}}>
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
                    justifyContent: 'center',
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
                  <div className='ProjectPhotosBox'>
                    <Box className='BtnFrom650px'>
                      <Button
                        sx={{ color: 'white' }}
                        disabled={photoCount === 0}
                        onClick={handlePreviousPhoto}
                      >
                        <ArrowBackIosNewIcon />{' '}
                      </Button>
                    </Box>
                    <Box className='ProjectImg'>
                      <img
                        alt={project.thumbDesc}
                        src={IMG(project.projectDescription[photoCount].photo)}
                        style={{ maxHeight: '500px', borderRadius: '25px' }}
                      />
                    </Box>
                    <Box className='BtnFrom650px'>
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
                    <Box className='BtnTo650px'>
                      <Button
                        sx={{ color: 'white' }}
                        disabled={photoCount === 0}
                        onClick={handlePreviousPhoto}
                      >
                        <ArrowBackIosNewIcon />{' '}
                      </Button>
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
                  </div>
                </Box>
              </Box>
            );
          } else {
            return (
              <Box sx={{ paddingX: 2 }}>
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
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexWrap: "wrap"
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                      flexWrap: "wrap"
                    }}
                    className='ProjectCalculatorBox'
                  >
                    {project.projectDescription.map(projDesc => (
                      <Typography
                        variant='h6'
                        sx={{
                          maxWidth: '450px',
                          textAlign: 'left',
                          marginY: 1,
                        }}
                      >
                        {projDesc.label}
                      </Typography>
                    ))}
                  </Box>
                  <Box>
                  <Calculator />
                  </Box>
                </Box>
              </Box>
            );
          }
        }
      })}
    </div>
  );
};
export default Project;
