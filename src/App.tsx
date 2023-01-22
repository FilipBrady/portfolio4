import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import RouterComponent from './components/RouterComponent';
import TheNavigation from './components/TheNavigation';
import { Box } from '@mui/system';

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <div className='App'>
        {/* <TheNavigation /> */}
        <RouterComponent />
      </div>
    </BrowserRouter>
  );
}

export default App;
