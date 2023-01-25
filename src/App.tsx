import './App.css';
import { BrowserRouter } from 'react-router-dom';
import RouterComponent from './components/RouterComponent';

function App() {


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
