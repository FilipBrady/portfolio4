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
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

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
  const currentIndex = ProjectData.findIndex(project => project.thumbId === id);
  const nextIndex = (currentIndex + 1) % ProjectData.length;
  const nextProject = ProjectData[nextIndex];
  const previousIndex = (currentIndex - 1) % ProjectData.length;
  const previousProject = ProjectData[previousIndex];
  const maxIndex = ProjectData.length - 1;
  const minIndex = ProjectData.length - ProjectData.length;
  const lastProject = ProjectData[maxIndex];
  const firstProject = ProjectData[minIndex];

  return (
    <div>
      <Link
        to={routes.home}
        style={{ position: 'fixed', top: '1%', left: '1%' }}
      >
        <Button sx={{ color: 'white' }}>
          <HomeIcon sx={{ fontSize: '25px' }} />
        </Button>
      </Link>
      {ProjectData.map(project => {
        if (project.thumbId === id) {
          if (project.thumbId !== 'calculator') {
            return (
              <Box sx={{ padding: 2 }}>
                <Box sx={{ textAlign: 'center', paddingY: 0 }}>
                  <Typography variant='h5' sx={{ paddingTop: 2 }}>
                    {project.thumbHeader}
                  </Typography>
                  <Typography variant='h6'>{project.thumbDesc}</Typography>
                  <Tooltip
                    title='Full code on Github'
                    placement='right'
                    enterDelay={10}
                    leaveDelay={500}
                    className='GithubToolTip'
                  >
                    <Typography
                      variant='h2'
                      sx={{ marginY: 2, width: 'fit-content', marginX: 'auto' }}
                    >
                      {' '}
                      <a
                        href={project.MoreBtnLink}
                        className='LinkGithubProject'
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
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-around',
                    marginY: 3,
                  }}
                >
                  <Box>
                    {previousIndex === minIndex - 1 ? (
                      <Link
                        to={`${routes.project}/${lastProject.thumbId}`}
                        className='LinkNextPreviousProject'
                      >
                        <Box
                          sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                          }}
                        >
                          <Typography variant='h6'>
                            {lastProject.thumbHeader}
                          </Typography>
                          <Box
                            sx={{
                              display: 'flex',
                              flexDirection: 'row',
                              justifyContent: 'center',
                              alignItems: 'center',
                            }}
                          >
                            <ArrowBackIcon />
                            <Typography variant='body2'>
                              Previous Project
                            </Typography>
                          </Box>
                        </Box>
                      </Link>
                    ) : (
                      <Link
                        to={`${routes.project}/${previousProject.thumbId}`}
                        className='LinkNextPreviousProject'
                      >
                        <Box
                          sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                          }}
                        >
                          <Typography variant='h6'>
                            {previousProject.thumbHeader}
                          </Typography>
                          <Box
                            sx={{
                              display: 'flex',
                              flexDirection: 'row',
                              justifyContent: 'center',
                              alignItems: 'center',
                            }}
                          >
                            <ArrowBackIcon />
                            <Typography variant='body2'>
                              Previous Project
                            </Typography>
                          </Box>
                        </Box>
                      </Link>
                    )}
                  </Box>
                  <Box>
                    {nextIndex === maxIndex + 1 ? (
                      <Link
                        to={`${routes.project}/${firstProject.thumbId}`}
                        className='LinkNextPreviousProject'
                      >
                        <Box
                          sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                          }}
                        >
                          <Typography variant='h6'>
                            {firstProject.thumbHeader}
                          </Typography>
                          <Box
                            sx={{
                              display: 'flex',
                              flexDirection: 'row',
                              justifyContent: 'center',
                              alignItems: 'center',
                            }}
                          >
                            <Typography variant='body2'>
                              Next Project
                            </Typography>
                            <ArrowForwardIcon />
                          </Box>
                        </Box>
                      </Link>
                    ) : (
                      <Link
                        to={`${routes.project}/${nextProject.thumbId}`}
                        className='LinkNextPreviousProject'
                      >
                        <Box
                          sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                          }}
                        >
                          <Typography variant='h6'>
                            {nextProject.thumbHeader}
                          </Typography>
                          <Box
                            sx={{
                              display: 'flex',
                              flexDirection: 'row',
                              justifyContent: 'center',
                              alignItems: 'center',
                            }}
                          >
                            <Typography variant='body2'>
                              Next Project
                            </Typography>
                            <ArrowForwardIcon />
                          </Box>
                        </Box>
                      </Link>
                    )}
                  </Box>
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
                        className='LinkNextPreviousProject'
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
                    flexWrap: 'wrap',
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                      flexWrap: 'wrap',
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
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-around',
                    marginY: 3,
                  }}
                >
                  <Box>
                    {previousIndex === minIndex - 1 ? (
                      <Link
                        to={`${routes.project}/${lastProject.thumbId}`}
                        className='LinkNextPreviousProject'
                      >
                        <Box
                          sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                          }}
                        >
                          <Typography variant='h6'>
                            {lastProject.thumbHeader}
                          </Typography>
                          <Box
                            sx={{
                              display: 'flex',
                              flexDirection: 'row',
                              justifyContent: 'center',
                              alignItems: 'center',
                            }}
                          >
                            <ArrowBackIcon />
                            <Typography variant='body2'>
                              Previous Project
                            </Typography>
                          </Box>
                        </Box>
                      </Link>
                    ) : (
                      <Link
                        to={`${routes.project}/${previousProject.thumbId}`}
                        className='LinkNextPreviousProject'
                      >
                        <Box
                          sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                          }}
                        >
                          <Typography variant='h6'>
                            {previousProject.thumbHeader}
                          </Typography>
                          <Box
                            sx={{
                              display: 'flex',
                              flexDirection: 'row',
                              justifyContent: 'center',
                              alignItems: 'center',
                            }}
                          >
                            <ArrowBackIcon />
                            <Typography variant='body2'>
                              Previous Project
                            </Typography>
                          </Box>
                        </Box>
                      </Link>
                    )}
                  </Box>
                  <Box>
                    {nextIndex === maxIndex + 1 ? (
                      <Link
                        to={`${routes.project}/${firstProject.thumbId}`}
                        className='LinkNextPreviousProject'
                      >
                        <Box
                          sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                          }}
                        >
                          <Typography variant='h6'>
                            {firstProject.thumbHeader}
                          </Typography>
                          <Box
                            sx={{
                              display: 'flex',
                              flexDirection: 'row',
                              justifyContent: 'center',
                              alignItems: 'center',
                            }}
                          >
                            <Typography variant='body2'>
                              Next Project
                            </Typography>
                            <ArrowForwardIcon />
                          </Box>
                        </Box>
                      </Link>
                    ) : (
                      <Link
                        to={`${routes.project}/${nextProject.thumbId}`}
                        className='LinkNextPreviousProject'
                      >
                        <Box
                          sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                          }}
                        >
                          <Typography variant='h6'>
                            {nextProject.thumbHeader}
                          </Typography>
                          <Box
                            sx={{
                              display: 'flex',
                              flexDirection: 'row',
                              justifyContent: 'center',
                              alignItems: 'center',
                            }}
                          >
                            <Typography variant='body2'>
                              Next Project
                            </Typography>
                            <ArrowForwardIcon />
                          </Box>
                        </Box>
                      </Link>
                    )}
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
