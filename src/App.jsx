import React from 'react'
<<<<<<< HEAD
import Hero from './Components/Hero'
import AboutMe from './Components/AboutMe'
=======
import Hero from './Components/Hero/Hero'
import AboutMe from './Components/AboutMe/AboutMe'
>>>>>>> master
import Projects from './Components/Projects/Projects'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import RouteLayout from './layout/RouteLayout'
import AllProjects from './Components/AllProjects/AllProjects'
<<<<<<< HEAD
import Contact from './Components/Contact'
import { ToastContainer } from 'react-toastify';
=======
import Contact from './Components/Contact/Contact'

>>>>>>> master

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
