import React, { useState } from 'react'
import './AllProjects.css';
import { useLocation } from 'react-router-dom';

import Aos from 'aos' 
import 'aos/dist/aos.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

import html from '../../assets/stack_icons/html.png'
import css from '../../assets/stack_icons/css.png'
import js from '../../assets/stack_icons/js.png'
import react from '../../assets/stack_icons/react.png'
import bootstrap from '../../assets/stack_icons/bootstrap.png'
import tailwind from '../../assets/stack_icons/tailwind.png'
import php from '../../assets/stack_icons/php.png'
import mysql from '../../assets/stack_icons/mysql.png'
import laravel from '../../assets/stack_icons/laravel.png'
import nodejs from '../../assets/stack_icons/nodejs.png'
import expressjs from '../../assets/stack_icons/expressjs.png'
import mongodb from '../../assets/stack_icons/mongodb.png'
import vscode from '../../assets/stack_icons/vscode.png'
import git from '../../assets/stack_icons/git.png'
import github from '../../assets/stack_icons/github.png'
import postman from '../../assets/stack_icons/postman.png'
import npm from '../../assets/stack_icons/npm.png'
import photoshop from '../../assets/stack_icons/photoshop.png'

import charles from '../../assets/charles.jpg'
import isii from '../../assets/system_ss/isi-website.png'
import cslauncher from '../../assets/system_ss/cslauncher.png'
import misOperations from '../../assets/system_ss/mis-operations.png'
import upc from '../../assets/system_ss/upc-website.png'
import eeg from '../../assets/system_ss/eeg-website.png'
// import ProjectCards from '../ProjectCards/ProjectCards';




const AllProjects = () => {
  const [projects, setProjects] = useState  ([{
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
     <div id="all-projects">
        <h1 className='title' > All of my Projects</h1>
        <div className='projects-content'>
          {/* {
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
          } */}
          
        
        </div>
      </div>
    </>
  )
}

export default AllProjects
