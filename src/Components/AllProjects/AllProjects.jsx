import React, { useState } from 'react'
import './AllProjects.css';
import { useLocation } from 'react-router-dom';

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
        <h1 className='title' > Projects</h1>
        <div className='projects-content'>
          {
            projects.map((project, index) => {
              return(
                <div className="project-card" key={index} >
                  <img src={project.image} alt="" />
                  <div className="card-body">
                    <h2>{project.title}</h2>
                    <p>{project.description}</p>
                    <h4>Tools Used</h4>
                    <div className="project-tools">
                      {
                        project.toolsUsed.map((tool, index) => {
                          return (
                            <img src={tool} alt="" key={index}/>
                          )
                        })
                      }
                    </div>
                    <div className='project-links'>
                      {project.liveView ? <a href={project.liveViewLink} target='_blank'>View Live</a> :''}
                      {project.github ? <a href={project.githubLink} target='_blank'><FontAwesomeIcon icon={faGithub} /> Github</a> :''}
                    </div>
                  </div>
                </div>
              )
            })
          }
          
        
        </div>
        
      </div>
    </>
  )
}

export default AllProjects
