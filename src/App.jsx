import React from 'react'
import Hero from './Pages/Hero'
import AboutMe from './Pages/AboutMe'
import Projects from './Pages/Projects'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import RouteLayout from './layout/RouteLayout'
import AllProjects from './Pages/AllProjects'
import Contact from './Pages/Contact'
import { ToastContainer } from 'react-toastify';
import ProjModal from './Components/Modals/ProjModal'


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
