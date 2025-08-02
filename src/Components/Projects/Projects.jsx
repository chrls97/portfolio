import React, { useEffect } from 'react'
import './Projects.css'
import Aos from 'aos' 
import 'aos/dist/aos.css'

import html from '../../Assets/stack_icons/html.png'
import css from '../../Assets/stack_icons/css.png'
import js from '../../Assets/stack_icons/js.png'
import bootstrap from '../../Assets/stack_icons/bootstrap.png'
import php from '../../Assets/stack_icons/php.png'
import mysql from '../../Assets/stack_icons/mysql.png'

import charles from '../../assets/charles.jpg'
import { hr } from 'framer-motion/client'

const Projects = () => {

  useEffect(() => {
    Aos.init()
  },[])

  return (
    <>
     
      <div id="projects">
        <h1 className='title' data-aos='fade-up' data-aos-duration='1500'> Projects</h1>
        <div className='projects-content'>
          <div className='project-card' >
            <img src={charles} alt="" />
            <div className='card-body'>
              <h2>iSolutions Operations System</h2>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta ad commodi voluptates harum eos delectus, molestias totam possimus suscipit doloribus nisi labore maiores, maxime sint nihil exercitationem eum! Eius, beatae!</p>
              
              <h4>Tools Used</h4>
              <div className='tools-used'>
                <img src={html} alt="" />
                <img src={css} alt="" />
                <img src={js} alt="" />
                <img src={bootstrap} alt="" />
                <img src={php} alt="" />
                <img src={mysql} alt="" />
              </div>

              <div>
                <button>Live View</button>
                <button>Github</button>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </>
  )
}

export default Projects
