import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'


import { Link } from 'react-router-dom'
import ProjectCards from '../Components/Cards/ProjectCards'
import { projects } from '../assets/assets'

const Projects = () => {
  


  return (
    <>
      <section id="projects"  className='w-full relative px-[5%] py-[20px] sm:py-[80px]'>
        <div id="projects" className=' flex flex-col justify-center items-center max-w-[1520px] mx-auto '>
          <div className='flex flex-col sm:flex-row items-center justify-center text-[3rem] mb-15'  >
            <span className='font-light pr-4'>Featured</span><span className='font-bold bg-gradient-to-r from-[#0639a7] to-[#15b5ff] bg-clip-text text-transparent'>PROJECTS</span>
          </div>
        
          <div className='flex flex-wrap gap-5 items-stretch justify-center '>
            {
              projects.map((project, index) => {
                return(
                  <ProjectCards 
                    id={project.id} 
                    title={project.title} 
                    details={project.details[0]}
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

          <div className='flex justify-center mt-8' >
              <Link onClick={() => window.scrollTo(0, 0)} to={'/projects' } className='text-[1.2rem]  text-white bg-gradient-to-r from-[#0639a7] to-[#15b5ff]  px-10 py-3 rounded-full mt-2 cursor-pointer hover:translate-x-6 duration-500'> See More Projects ({projects.length}) <FontAwesomeIcon icon={faArrowRight} /> </Link>
            </div>
          
        </div>
      </section>
    </>
  )
}

export default Projects
