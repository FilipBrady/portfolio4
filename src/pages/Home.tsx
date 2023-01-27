import { Link } from 'react-router-dom';
import MyPhoto from '../images/myPhoto-removebg-preview.png';
import { routes } from '../components/types/routes';
import { Box, Typography } from '@mui/material';
import { useRef, useEffect } from 'react';

let interval: any = null;

const handleMouseOver = (elementRef: any) => {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let iterations = 0;
  clearInterval(interval);
  interval = setInterval(() => {
    elementRef.current.innerText = elementRef.current.innerText
      .split('')
      .map((letter: any, index: any) => {
        if (index < iterations) {
          return elementRef.current.dataset.value[index];
        }
        return letters[Math.floor(Math.random() * 26)];
      })
      .join('');

    if (iterations >= elementRef.current.dataset.value.length) {
      clearInterval(interval);
    }
    iterations += 1 / 3;
  }, 30);
};

const Home = () => {
  const elementRef = useRef(null);

  useEffect(() => {
    handleMouseOver(elementRef);
  }, []);


  return (
    <div>
      <Box className='ContentBox'>
        <Box className='TextBoxHome boxOuter'>
          <Box className='boxInner'>
            <Typography
              variant='h5'
              data-value='Hello, I am Filip'
              ref={elementRef}
            >
              Hello, I am Filip
            </Typography>
            <Typography
              variant='h4'
              data-value='Frontend Developer'
              ref={elementRef}
            >
              Frontend Developer
            </Typography>
            <Typography
              variant='h6'
              // data-value='I am a self-taught frontend Developer. I learned frontend development mainly from online courses. Currently, I am focusing on React JS. In the future, I plan to learn backend and working with databases. I love learning new things and new challenges. If you like me or my work, do not hesitate and contact me.'
              // ref={elementRef}
            >
              I am a self-taught frontend Developer. I learned frontend
              development mainly from online courses. Currently, I am focusing
              on React JS. In the future, I plan to learn backend and working
              with databases. I love learning new things and new challenges. If
              you like me or my work, do not hesitate and contact me.
            </Typography>
          </Box>
          {/* <Link
            style={{
              textDecoration: 'none',
              fontSize: '18px',
              fontWeight: '600',
              color: '#00C2FF',
            }}
            to={routes.about}
          >
          Learn more =&gt;{' '}
        </Link> */}
        </Box>
        <img alt='Me' src={MyPhoto} className='MyPhoto' />
      </Box>
    </div>
  );
};
export default Home;
