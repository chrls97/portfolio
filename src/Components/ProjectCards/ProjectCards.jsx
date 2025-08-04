import React from 'react'
import Aos from 'aos' 
import 'aos/dist/aos.css'
import './ProjectCards.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const ProjectCards = ({image, title, description, toolsUsed, liveView, liveViewLink, github, githubLink}) => {
  return (
    <div className='project-card' data-aos='fade-up' data-aos-duration='1500'>
      <img src={image} alt="" />
      <div className="card-body">
        <h2>{title}</h2>
        <p>{description}</p>
        <h4>Tools Used</h4>
        <div className="project-tools">
        {
          toolsUsed.map((tool, index) => {
            return (
              <img src={tool} alt="" key={index}/>
            )
          })
        }
        <div className='project-links'>
        {liveView ? <a href={liveViewLink} target='_blank'>View Live</a> :''}
        {github ? <a href={githubLink} target='_blank'> Github</a> :''}
      </div>
     </div>
      </div>
      
    </div>
  )
}

export default ProjectCards