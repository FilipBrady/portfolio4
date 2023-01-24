import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { Link, useParams } from 'react-router-dom';
import { ProjectData } from '../components/types/ProjectsData';
import GitHubIcon from '@mui/icons-material/GitHub';
import { routes } from '../components/types/routes';

const Project = () => {
  const { id } = useParams();
  const IMG = (imgName: any) => {
    return require(`../images/${imgName}`);
  };
  return (
    <div>
      {ProjectData.map(project => {
        if (project.thumbId === id) {
          return (
            <div style={{ padding: '15px' }}>
              {/* <Link to={routes.contact}>Back</Link> */}
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  height: '100vh',
                  
                }}
              >
                <Box sx={{ textAlign: 'left' }}>
                  <Typography variant='h5' sx={{ paddingTop: 2 }}>
                    {project.thumbHeader}
                  </Typography>
                  <Typography variant='h6'>({project.thumbDesc})</Typography>
                  <Typography variant='h2' sx={{ marginY: 2 }}>
                    {' '}
                    <a
                      href={project.MoreBtnLink}
                      style={{ color: 'white', textDecoration: 'none' }}
                    >
                      <GitHubIcon sx={{ fontSize: '5rem' }} />
                    </a>{' '}
                  </Typography>
                </Box>
                <Box>
                  <img
                    alt='nthng'
                    src={IMG(project.projectDescription[0].photo)}
                    style={{ maxWidth: '500px', borderRadius: '25px' }}
                  />
                </Box>
              </Box>

              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row-reverse',
                  flexWrap: 'nowrap',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  height: '100vh',
                }}
              >
                <Box sx={{ textAlign: 'left' }}>
                  <Typography variant='h6' sx={{ maxWidth: '450px' }}>
                    {project.projectDescription[0].label}
                  </Typography>
                  <Typography
                    variant='h6'
                    sx={{ maxWidth: '450px', paddingTop: 2 }}
                  >
                    {project.projectDescription[1].label}
                  </Typography>
                </Box>
                <Box>
                  <img
                    alt='nthng'
                    src={IMG(project.projectDescription[1].photo)}
                    style={{ maxWidth: '500px', borderRadius: '25px' }}
                  />
                </Box>
              </Box>

              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  flexWrap: 'nowrap',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  height: '100vh',
                }}
              >
                <Box sx={{ textAlign: 'left' }}>
                  <Typography variant='h6' sx={{ maxWidth: '450px' }}>
                    {project.projectDescription[2].label}
                  </Typography>
                </Box>
                <Box>
                  <img
                    alt='nthng'
                    src={IMG(project.projectDescription[2].photo)}
                    style={{ maxWidth: '500px', borderRadius: '25px' }}
                  />
                </Box>
              </Box>

              {project.projectDescription.length === 4 && (
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'nowrap',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    height: '100vh',
                  }}
                >
                  <Box sx={{ textAlign: 'left' }}>
                    <Typography variant='h6' sx={{ maxWidth: '450px' }}>
                      {project.projectDescription[3].label}
                    </Typography>
                  </Box>
                  <Box>
                    <img
                      alt='nthng'
                      src={IMG(project.projectDescription[3].photo)}
                      style={{ maxWidth: '500px', borderRadius: '25px' }}
                    />
                  </Box>
                </Box>
              )}
            </div>
          );
        }
      })}
      {/* {ProjectData.map(project => {
        if (project.thumbId === id) {
          return (
            <div>
              {project.projectDescription.map(item => {
                return item ? (
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'row',
                      flexWrap: 'wrap',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      height: '100vh',
                    }}
                  >
                    <Box sx={{ textAlign: 'left' }}>
                      <Typography variant='h5' sx={{ paddingTop: 2 }}>
                        {project.thumbHeader}
                      </Typography>
                      <Typography variant='h6'>
                        ({project.thumbDesc})
                      </Typography>
                      <Typography variant='h2' sx={{ marginY: 2 }}>
                        {' '}
                        <a
                          href={project.MoreBtnLink}
                          style={{ color: 'white', textDecoration: 'none' }}
                        >
                          <GitHubIcon sx={{ fontSize: '5rem' }} />
                        </a>{' '}
                      </Typography>
                    </Box>
                    <Box>
                      <img
                        alt='nthng'
                        src={IMG(project.projectDescription[0].photo)}
                        style={{ maxWidth: '500px', borderRadius: '25px' }}
                      />
                    </Box>
                  </Box>
                ) : null;
              })}
            </div>
          );
        }
      })} */}
      {/* {project.projectDescription.map(ProjectDesc => (
      <div>
      <img alt='nthng' src={IMG(ProjectDesc.photo)} />
      </div>
    ))} */}
    </div>
  );
};
export default Project;
