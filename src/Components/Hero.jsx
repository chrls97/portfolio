import React, { useEffect } from 'react'
import charles from '../assets/charles.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import Aos from 'aos'
import 'aos/dist/aos.css'
import TextType  from '../Animation/TextType';  
import resume from '../assets/Chales Lennard C. Amon - Resume.pdf'



const Hero = () => {

  const githubLink = 'https://github.com/chrls97'
  const linkedIn = 'https://www.linkedin.com/in/charles-lennard-amon-533715169'

  // Initialize AOS for animations
  
  return (
    <div id="hero" className='px-[5%] sm:px-[10%] py-0 sm:py-[30px]'>
      <div className='flex justify-between items-center py-0 sm:py-15'>
        <div className='w-full sm:w-1/2 flex flex-col items-center sm:items-start text-center sm:text-left' data-aos="fade-right" data-aos-duration="1500">
          <h2 className='text-[2.5rem]  lg:text-[3.5rem] font-bold'>Hi!,</h2>
          <h1 className='text-[2.5rem]  lg:text-[3.5rem] font-bold'>I'm <span className='text-[2.5rem]  lg:text-[3.5rem] font-extrabold bg-gradient-to-r from-[#0639a7] to-[#15b5ff] bg-clip-text text-transparent'>CHARLES LENNARD C. AMON</span></h1>
          <h2 className='text-4xl font-semibold '>
            <TextType 
              text={["Fullstack Developer", "Frontend Developer", "Backend Developer"]}
              typingSpeed={75}
              pauseDuration={1500}
              showCursor={true}
              cursorCharacter="|"
            />
          </h2>
          <p className='text-[20px] md:text-[18px] lg:text-2xl mt-5 text-center sm:text-left'>I handle the development, deployment and maintenance of your Website or Web Application, start to finish.</p>

          <div className='text-[20px] md:text-[18px] lg:text-2xl mt-5 flex flex-col justify-center gap-2'>
            <span className='font-semibold'>Follow me on:</span>
            <div className='flex gap-3 text-1xl items-center  justify-center sm:justify-start'>
              <a className='border-2 border-white rounded-full px-2 py-1 hover:bg-white hover:text-gray-700 transition-all duration-400' href={githubLink} target='_blank'><FontAwesomeIcon icon={faGithub} /></a>
              <a className='border-2 border-white rounded-full px-2 py-1 hover:bg-white hover:text-gray-700 transition-all duration-400' href={linkedIn} target='_blank' ><FontAwesomeIcon icon={faLinkedinIn} /></a>
            </div>
          </div>

          <div className='flex gap-5 mt-7 text-[20px]'>
            <a className='text-[18px]  text-white bg-gradient-to-r from-[#0639a7] to-[#15b5ff]  px-5 py-2 rounded-full' href={resume} target='_blank' >Download CV</a>
            <a className='text-[18px]  text-white bg-gradient-to-r from-[#0639a7] to-[#15b5ff]  px-5 py-2 rounded-full' href='#contact'>Contact Me</a>
          </div>
          
          
        </div>
        <div className='hidden sm:block sm:w-4/12' data-aos="fade-left" data-aos-duration="1500">
          <img src={charles} alt="Chales" className='w-110  rounded-4xl object-scale-down '/>
        </div>
      </div>
    </div>
  )
}

export default Hero
