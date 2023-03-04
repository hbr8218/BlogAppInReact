import React, { lazy } from 'react'
import {HashRouter as Router ,Routes, Route} from "react-router-dom"



////// Pages //////////////////
const HomePage = lazy(() => import('../pages/Landing/HomePage'));
const Blog = lazy( () => import('../pages/Blog'));
const ProjectList = lazy( () => import('../pages/ProjectList'));
const About = lazy( () => import('../pages/About'));
const NotFound = lazy( () => import('../pages/NotFound'))
//////////////////////////////


const AppRouter = () => {
  return (
    <Router>
        <Routes>
            {/* Landing page route*/}
            <Route exact path="/" element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />

            {/* blog Pages */}
            <Route path="/blog-list" element={<Blog />}/>

            {/* projects */}
            <Route path="/project-list" element={<ProjectList />}/>

            {/* other pages routes */}
            <Route path='/about' element={<About />} />
            <Route path='*' element={<NotFound />} />

        </Routes>
    </Router>
  )
}

export default AppRouter