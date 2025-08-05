import React, { useEffect } from 'react'
import './Hero.css'
import charles from '../../assets/charles.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import Aos from 'aos'
import 'aos/dist/aos.css'
import TextType  from '../../animation/TextType';  


const Hero = () => {
  // Initialize AOS for animations
  useEffect(() => {
    Aos.init();
  },[])
  return (
    <div id='hero'>
      <div className='hero-content'>
        <div className='hero-left' data-aos="fade-right" data-aos-duration="1500">
          <h2>Hi!,</h2>
          <h1>I'm <span>CHARLES LENNARD C. AMON</span></h1>
          <h2>
            <TextType 
              text={["Fullstack Developer", "Frontend Developer", "Backend Developer"]}
              typingSpeed={75}
              pauseDuration={1500}
              showCursor={true}
              cursorCharacter="|"
            />
          </h2>
          <p>I handle the development, deployment and maintenance of your Website or Web Application, start to finish.</p>

          <div className='hero-socials'>
            <span>Follow me on:</span>
            <div className='social-icons'>
              <a href='https://github.com/chrls97' target='_blank'><FontAwesomeIcon icon={faGithub} /></a>
              <a href='https://www.linkedin.com/in/charles-lennard-amon-533715169/' target='_blank' className='linkedin'><FontAwesomeIcon icon={faLinkedinIn} /></a>
            </div>
          </div>

          <div className='hero-buttons'>
            <a href='https://drive.google.com/file/d/1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q/view?usp=sharing' target='_blank' className='btn'>Download CV</a>
            <a href='#contact' className='btn btn-primary'>Contact Me</a>
          </div>
          
          
        </div>
        <div className='hero-right' data-aos="fade-left" data-aos-duration="1500">
          <img src={charles} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Hero
