import { Routes, Route } from 'react-router-dom';
import About from '../pages/About';
import PageContainer from '../pages/PageContainer';
import Home from '../pages/Home';
import Project from '../pages/Project';
import Projects from '../pages/Projects';
import { routes } from './types/routes';

const RouterComponent = () => {
  return (
    <div>
      <Routes>
        <Route path={routes.projects} element={<Projects />} />
        <Route path={`${routes.project}/:id`} element={<Project />} />
        <Route path={routes.home} element={<PageContainer />} />
      </Routes>
    </div>
  );
};
export default RouterComponent;
