import { Link } from 'react-router-dom';
import MyPhoto from '../images/myPhoto-removebg-preview.png'
import { routes } from '../components/types/routes';
import { Box, Typography } from '@mui/material';

const Home = () => {
  return (
    <div>
      <Box className='ContentBox'>
        <img alt='Me' src={MyPhoto} className='MyPhoto' />
        <Box className='TextBoxHome'>
          <Typography variant='h5'>Hello, I am Filip</Typography>
          <Typography variant='h4'>Frontend Developer</Typography>
          <Typography variant="h6">I am a self-taught frontend Developer. I learned frontend development mainly from online courses. Currently, I am focusing on React JS. In the future, I plan to learn backend and working with databases. I love learning new things and new challenges. If you like me or my work, do not hesitate and contact me.</Typography>
          <Link style={{textDecoration: "none", fontSize: "18px", fontWeight: "600", color: "#00C2FF"}} to={routes.about}>Learn more =&gt; </Link>
        </Box>
      </Box>
    </div>
  );
};
export default Home;
