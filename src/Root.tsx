import {
  Routes,
  Route
} from 'react-router-dom';
import Home from './_root/Homepage/Home';
import Project from './_root/Projects/Project';
import RootLayout from './_root/RootLayout';
import ErrorPage from './_root/404/ErrorPage';
import AboutUs from './_root/AboutUs/AboutUs';
import RealtorsArena from './_root/Realtors-Arena/RealtorsArena';

const Root = () => {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route path='/' element={<Home />} />
        <Route path='/our-projects' element={<Project />} />
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/realtors-arena' element={<RealtorsArena />} />
        <Route path='*' element={<ErrorPage />} />
      </Route>
    </Routes>
  )
}

export default Root;
