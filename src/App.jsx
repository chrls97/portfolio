import React from 'react'
import Hero from './Components/Hero'
import AboutMe from './Components/AboutMe/AboutMe'
import Projects from './Components/Projects/Projects'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import RouteLayout from './layout/RouteLayout'
import AllProjects from './Components/AllProjects/AllProjects'
import Contact from './Components/Contact'
import { ToastContainer } from 'react-toastify';

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
      <ToastContainer />
      <RouterProvider router={router} />
    </>
  )
}

export default App
