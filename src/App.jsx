import React from 'react'
<<<<<<< HEAD
import Hero from './Components/Hero'
import AboutMe from './Components/AboutMe'
import Projects from './Components/Projects/Projects'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import RouteLayout from './layout/RouteLayout'
import AllProjects from './Components/AllProjects/AllProjects'
import Contact from './Components/Contact'
=======
import Hero from './Pages/Hero'
import AboutMe from './Pages/AboutMe'
import Projects from './Pages/Projects'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import RouteLayout from './layout/RouteLayout'
import AllProjects from './Pages/AllProjects'
import Contact from './Pages/Contact'
>>>>>>> v2
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
      
      <Route path='projects' element={<AllProjects />} />g
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
