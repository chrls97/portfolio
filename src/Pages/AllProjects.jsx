import React from 'react'
import ProjectCards from '../Components/Cards/ProjectCards'
import {projects} from '../assets/assets'



const AllProjects = () => {

  return (
     <div id="all-projects" className='px-[5%] sm:px-[10%] py-[50px] flex flex-col justify-center items-center gap-y-5'>
        <h1 className='text-[3rem] font-bold bg-gradient-to-r from-[#0639a7] to-[#15b5ff] bg-clip-text text-transparent' > All of my Projects</h1>
        <div className='flex flex-wrap gap-5 items-stretch justify-center'>
         {projects.map((project, index) => {
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
      </div>
  )
}

export default AllProjects
