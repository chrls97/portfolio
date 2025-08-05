import React from 'react'
import Hero from './components/Hero/Hero'
import AboutMe from './components/AboutMe/AboutMe'
import Projects from './components/Projects/Projects'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import RouteLayout from './layout/RouteLayout'
import AllProjects from './components/AllProjects/AllProjects'
import Contact from './components/Contact/Contact'

const App = () => {
  const router = createBrowserRouter(createRoutesFromElements(
    // Main layout with Navbar
    <Route path='' element={<RouteLayout/>}> 
      <Route index element={ // Default route
        <>
          <Hero />
          <AboutMe />
          <Projects />
          <Contact />
        </>
      } />
      
      <Route path='projects' element={<AllProjects />} />
    </Route>
  ));

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
