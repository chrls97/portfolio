import React, { useEffect, useState } from 'react'
import './Projects.css'
import Aos from 'aos' 
import 'aos/dist/aos.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'


import html from '../../Assets/stack_icons/html.png'
import css from '../../Assets/stack_icons/css.png'
import js from '../../Assets/stack_icons/js.png'
import react from '../../Assets/stack_icons/react.png'
import bootstrap from '../../Assets/stack_icons/bootstrap.png'
import tailwind from '../../Assets/stack_icons/tailwind.png'
import php from '../../Assets/stack_icons/php.png'
import mysql from '../../Assets/stack_icons/mysql.png'
import laravel from '../../Assets/stack_icons/laravel.png'
import nodejs from '../../Assets/stack_icons/nodejs.png'
import expressjs from '../../Assets/stack_icons/expressjs.png'
import mongodb from '../../Assets/stack_icons/mongodb.png'
import vscode from '../../Assets/stack_icons/vscode.png'
import git from '../../Assets/stack_icons/git.png'
import github from '../../Assets/stack_icons/github.png'
import postman from '../../Assets/stack_icons/postman.png'
import npm from '../../Assets/stack_icons/npm.png'
import photoshop from '../../Assets/stack_icons/photoshop.png'

import charles from '../../assets/charles.jpg'
import isii from '../../assets/system_ss/isi-website.png'
import cslauncher from '../../assets/system_ss/cslauncher.png'
import misOperations from '../../assets/system_ss/mis-operations.png'
import upc from '../../assets/system_ss/upc-website.png'
import eeg from '../../assets/system_ss/eeg-website.png'

import { div, hr } from 'framer-motion/client'
import { Link } from 'react-router-dom'
import ProjectCards from '../ProjectCards/ProjectCards'

const Projects = () => {

  useEffect(() => {
    Aos.init()
  },[])

  const [projects, setProjects] = useState([{
    title: 'iSolutions Operations System',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta ad commodi voluptates harum eos delectus, molestias totam possimus suscipit doloribus nisi labore maiores, maxime sint nihil exercitationem eum! Eius, beatae!',
    image: isii,
    toolsUsed: [html, css, js, bootstrap, php, mysql],
    liveView: true,
    liveViewLink: '#',
    github: true,
    githubLink: '#'
  },{
    title: 'iSolutions Website',
    description: 'Lorem ipsum does, maxime sint nihil exercitationem eum! Eius, beatae!',
    image: isii,
    toolsUsed: [html, css, js, bootstrap, php, mysql],
    liveView: true,
    liveViewLink: '#',
    github: true,
    githubLink: '#'
  },{
    title: 'United Portusers Confederation Website',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta ad commodi voluptates harum eos delectus, molestias totam possimus suscipit doloribus nisi labore maiores, maxime sint nihil exercitationem eum! Eius, beatae!',
    image: upc,
    toolsUsed: [html, css, js, bootstrap, php, mysql],
    liveView: true,
    liveViewLink: '#',
    github: true,
    githubLink: '#'
  },{
    title: 'Eagle Express Lines Website',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta ad commodi voluptates harum eos delectus, molestias totam possimus suscipit doloribus nisi labore maiores, maxime sint nihil exercitationem eum! Eius, beatae!',
    image: eeg,
    toolsUsed: [html, css, js, bootstrap, php, mysql],
    liveView: true,
    liveViewLink: '#',
    github: true,
    githubLink: '#'
  },{
    title: 'MIS Operations System',
    description: 'Lorem ipsum does, maxime sint nihil exercitationem eum! Eius, beatae!',
    image: misOperations,
    toolsUsed: [html, css, js, bootstrap, php, mysql],
    liveView: true,
    liveViewLink: 'http://www.cargosoft.com.ph/mis-operations/index.php',
    github: true,
    githubLink: '#'
  },{
    title: 'Cargosoft Launcher System',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta ad commodi voluptates harum eos delectus, molestias totam possimus suscipit doloribus nisi labore maiores, maxime sint nihil exercitationem eum! Eius, beatae!',
    image: cslauncher,
    toolsUsed: [html, css, js, bootstrap, php, mysql],
    liveView: true,
    liveViewLink: 'http://www.cargosoft.com.ph/cargosoft-launcher/',
    github: true,
    githubLink: '#'
  }]);

  return (
    <>
     
      <div id="projects">
        <div className='projects-header' data-aos='fade-up' data-aos-duration='1500'>
          <span className='featured-text'>Featured</span><span className='projects-text'>Projects</span>
         
        </div>
       
       
        <div className='projects-content'>
          {
            projects.map((project, index) => {
              return(
                <ProjectCards 
                  title={project.title} 
                  image={project.image}
                  description={project.description}
                  toolsUsed={project.toolsUsed}
                  liveView={project.liveView}
                  liveViewLink={project.liveViewLink}
                  github={project.github}
                  githubLink={project.githubLink}
                  key={index}
               
                />
              )
            })
          }
          
          <div className='more-projects'>
            <Link onClick={() => window.scrollTo(0, 0)} to={'/projects' } > See More Projects <FontAwesomeIcon icon={faArrowRight} /> </Link>
          </div>
        </div>
        
      </div>
    </>
  )
}

export default Projects
