import React, { useState, useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faFolderOpen, faEye } from '@fortawesome/free-solid-svg-icons'
import ProjModal from '../Modals/ProjModal'

const ProjectCards = ({ id, details, title, description, toolsUsed, liveView, liveViewLink, github, githubLink, gallery }) => {
  const [isOpen, setIsOpen] = useState(false);
  // In your modal component
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }

    return () => {
      document.body.classList.remove('modal-open');
    };
  }, [isOpen]);




  return (
    <div className='flex flex-col basis-[100%] md:basis-[48%] xl:basis-[32%] rounded-b-[10px] bg-[rgba(141,140,140,0.062)] ' >
      <ProjModal open={isOpen} onClose={() => setIsOpen(!isOpen)} projectId={id}> </ProjModal>
      <img  onClick={()=> setIsOpen(!isOpen)} src={details.image} alt={title} className='h-[250px]  object-cover rounded-t-[10px] cursor-pointer' />
      <div className="px-5 py-5">
        <h2 className='text-[22px] font-semibold mb-2'>{title}</h2>
        <p className='text-justify mb-2'>{description}</p>
        <h4 className='font-semibold mb-2'>Tools Used</h4>

        <div className="flex flex-wrap gap-2 mb-5">
          {
            toolsUsed.map((tool, index) => {
              return (
                <img src={tool.icon} alt={tool.name} title={tool.name} key={index} className='cursor-pointer w-11 hover:translate-y-[-5px] duration-400' />
              )
            })
          }
        </div>

        <div className='flex gap-3 items-center'>
          {liveView ? <a href={liveViewLink} target='_blank' className='flex justify-center items-center gap-2 border-1 border-white rounded-full px-3 py-1 '><FontAwesomeIcon icon={faEye} /> View Live</a> : ''}
          {github ? <a href={githubLink} target='_blank' className='flex justify-center items-center border-1 border-white rounded-full px-2 py-1 '><FontAwesomeIcon icon={faGithub} />&nbsp;&nbsp;Github</a> : ''}
          {gallery ? <a onClick={()=> setIsOpen(!isOpen)}  className='flex justify-center items-center border-1 border-white rounded-full px-3 py-1 cursor-pointer'> <FontAwesomeIcon icon={faFolderOpen} />&nbsp;&nbsp;Gallery</a> : ''}
        </div>
      </div>
    </div>
  )
}

export default ProjectCards
