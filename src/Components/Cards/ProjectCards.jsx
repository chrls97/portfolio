import React from 'react'
import Aos from 'aos' 
import 'aos/dist/aos.css'
import './ProjectCards.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faFolderOpen, faEye } from '@fortawesome/free-solid-svg-icons'

const ProjectCards = ({image, title, description, toolsUsed, liveView, liveViewLink, github, githubLink, gallery}) => {
  return (
    <div className='flex flex-col basis-[100%] md:basis-[48%] xl:basis-[32%] rounded-b-[10px] bg-[rgba(141,140,140,0.062)]' >
      <img src={image} alt={title} className='h-[250px]  object-cover rounded-t-[10px] cursor-pointer' />
      <div className="px-5 py-5">
        <h2 className='text-[22px] font-semibold mb-2'>{title}</h2>
        <p className='text-justify mb-2'>{description}</p>
        <h4 className='font-semibold mb-2'>Tools Used</h4>

        <div className="flex flex-wrap gap-2 mb-5">
          {
            toolsUsed.map((tool, index) => {
              return (
                <img src={tool.icon} alt={tool.name} title={tool.name} key={index} className='cursor-pointer w-11 hover:translate-y-[-5px] duration-400'/>
              )
            })
          }
        </div>

        <div className='project-links'>
          {liveView ? <a href={liveViewLink} target='_blank'><FontAwesomeIcon icon={faEye} /> View Live</a> :''}
          {github ? <a href={githubLink} target='_blank'><FontAwesomeIcon icon={faGithub} />&nbsp;&nbsp;Github</a> :''}
          {gallery ? <a href={githubLink} target='_blank'> <FontAwesomeIcon icon={faFolderOpen} />&nbsp;&nbsp;Gallery</a> :''}
        </div>
      </div>
    </div>
  )
}

export default ProjectCards
