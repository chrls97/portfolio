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

import isii_ops from '../../assets/system_ss/isii-ops.png'
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
    description: 'Designed and developed a comprehensive ERP system to streamline business operations across multiple departments, including Sales, Purchasing, Accounting, Marketing, and Technical Services. The system features an intuitive dashboard, real-time reporting, and role-based access control, enhancing productivity, data accuracy, and decision-making.',
    image: isii_ops,
    toolsUsed: [html, css, js, bootstrap, php, mysql],
    liveView: false,
    liveViewLink: '#',
    github: false,
    githubLink: '#',
    gallery:true
  },{
    title: 'iSolutions International Inc. Website',
    description: 'iSolutions International Inc. presents a dynamic and responsive website designed to showcase comprehensive company information, services, solutions, and products. The platform ensures seamless accessibility across all devices, delivering an optimal user experience for clients and stakeholders.',
    image: isii,
    toolsUsed: [html, css, js, bootstrap, php, mysql],
    liveView: true,
    liveViewLink: 'http://www.isolutions.com.ph/',
    github: false,
    githubLink: '#',
    gallery:false
  },{
    title: 'United Portusers Confederation Website',
    description: 'Developed a fully responsive website for the United Portusers Confederation of the Philippines, Inc. to enhance digital presence and improve member engagement. The platform features a custom Content Management System for real-time updates on news, events, and member listings, while effectively showcasing the organization’s mission, structure, and membership application process.',
    image: upc,
    toolsUsed: [html, css, js, bootstrap, php, mysql],
    liveView: true,
    liveViewLink: 'https://www.upc-philippines.org/',
    github: false,
    githubLink: '#',
    gallery:false
  },{
    title: 'Eagle Express Lines Website',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta ad commodi voluptates harum eos delectus, molestias totam possimus suscipit doloribus nisi labore maiores, maxime sint nihil exercitationem eum! Eius, beatae!',
    image: eeg,
    toolsUsed: [html, css, js, bootstrap, php, mysql],
    liveView: true,
    liveViewLink: '#',
    github: true,
    githubLink: '#',
    gallery:true
  },{
    title: 'MIS Operations System',
    description: 'Lorem ipsum does, maxime sint nihil exercitationem eum! Eius, beatae!',
    image: misOperations,
    toolsUsed: [html, css, js, bootstrap, php, mysql],
    liveView: true,
    liveViewLink: 'http://www.cargosoft.com.ph/mis-operations/index.php',
    github: true,
    githubLink: '#',
    gallery:true
  },{
    title: 'Cargosoft Launcher System',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta ad commodi voluptates harum eos delectus, molestias totam possimus suscipit doloribus nisi labore maiores, maxime sint nihil exercitationem eum! Eius, beatae!',
    image: cslauncher,
    toolsUsed: [html, css, js, bootstrap, php, mysql],
    liveView: true,
    liveViewLink: 'http://www.cargosoft.com.ph/cargosoft-launcher/',
    github: true,
    githubLink: '#',
    gallery:true
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
                  gallery={project.gallery}
                  key={index}
                />
              )
            })
          }
        </div>

        <div className='more-projects' data-aos='fade-up' data-aos-duration='1500'>
            <Link onClick={() => window.scrollTo(0, 0)} to={'/projects' } > See More Projects <FontAwesomeIcon icon={faArrowRight} /> </Link>
          </div>
        
      </div>
    </>
  )
}

export default Projects
