import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useParams } from 'react-router-dom';
import { ProjectData } from '../components/types/ProjectsData';
import GitHubIcon from '@mui/icons-material/GitHub';

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
            <div style={{padding: "15px"}}>
              <Box sx={{display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "center", alignItems: "center", height: "100vh"}}>
                <Box sx={{ textAlign: 'left' }}>
                  <Typography variant='h5' sx={{ paddingTop: 2 }}>
                    {project.thumbHeader}
                  </Typography>
                  <Typography variant='h6' >({project.thumbDesc})</Typography>
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
                    style={{ maxWidth: '70%', borderRadius: '25px' }}
                  />
                </Box>
              </Box>

              {/* {project.projectDescription.map(ProjectDesc => (
              <div>
              <img alt='nthng' src={IMG(ProjectDesc.photo)} />
              </div>
            ))} */}
            </div>
          );
        }
      })}
    </div>
  );
};
export default Project;
