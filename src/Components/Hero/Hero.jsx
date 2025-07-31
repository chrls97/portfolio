import React from 'react'
import './Hero.css'
import hero from '../../assets/hero.jpg'
const Hero = () => {
  return (
    <div className='hero'>
      <div className='hero-content'>
        <div className='hero-left'>
          <h2>Hi!,</h2>
          <h1>I'm CHARLES LENNARD C. AMON</h1>
          <h2>Fullstack Developer</h2>
          <p>I handle the development, deployment and maintenance of your Website or Web Application, start to finish.</p>

          <div>
            <span>Follow / Contact me @</span>
            <i>LinkedIn</i> <i>GitHub</i> <i>Indeed</i><br />
          </div>
          
          <button>Check my Portfolio</button><button>Download Resume</button>
        </div>
        <div className='hero-right'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo quasi quae nisi sequi earum, animi eius quidem fugit quia laboriosam, similique in velit iusto error eveniet sapiente quas quisquam dolorum.
        </div>
      </div>
    </div>
  )
}

export default Hero
