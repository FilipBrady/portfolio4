import { Routes, Route } from "react-router-dom"
import About from "../pages/About"
import Contact from "../pages/Contact"
import Home from "../pages/Home"
import Project from "../pages/Project"
import Projects from "../pages/Projects"
import { routes } from "./types/routes"

const RouterComponent = () => {
  return (
    <div>
       <Routes>
        <Route path={routes.home} element={<Home />} />
        <Route path={routes.about} element={<About />} />
        <Route path={routes.projects} element={<Projects />} />
        <Route path={`${routes.project}/:id`} element={<Project />} />
        <Route path={routes.contact} element={<Contact />} />
      </Routes>
    </div>
  )
}
export default RouterComponent