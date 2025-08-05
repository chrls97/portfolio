import React, { useEffect } from 'react'
import './AboutMe.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
import CountUp from '../../animation/CountUp';
import charles from '../../assets/charles.jpg'

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

const AboutMe = () => {

  const techStacks = [
    {
      stack: 'frontend',
      languages: [
        { name: 'HTML', icon: html},
        { name: 'CSS', icon: css},
        { name: 'JavaScript', icon: js},
        { name: 'React', icon: react},
        { name: 'Bootstrap', icon: bootstrap},
        { name: 'Tailwind', icon: tailwind}
      ]
    },{
      stack: 'backend',
      languages: [
        { name: 'PHP', icon: php},
        { name: 'Laravel', icon: laravel},
        { name: 'NodeJs', icon: nodejs},
        { name: 'ExpressJs', icon: expressjs},
        { name: 'mySql', icon: mysql},
        { name: 'MongoDB', icon: mongodb}
      ]
    },{
      stack: 'tools',
      languages: [
        { name: 'VS Code', icon: vscode},
        { name: 'Git', icon: git},
        { name: 'Github', icon: github},
        { name: 'Postman', icon: postman},
        { name: 'NPM', icon: npm},
        { name: 'Photoshop', icon: photoshop}
      ]
    }
  ];

    const portfolio = [
      { project: 'Database management', images: ['https://i.imgur.com/1a2b3c4.png', 'https://i.imgur.com/5d6e7f8.png'], description: 'A web application for managing databases.' },
      { project: 'E-commerce platform', images: ['https://i.imgur.com/9a0b1c2.png', 'https://i.imgur.com/3d4e5f6.png'], description: 'An online store with a user-friendly interface.' }]


    useEffect(() => {
      Aos.init();
    },[])


    
  return (
    <div id='aboutme'>
      <div className='aboutme-content'>
        <h1 className='title' data-aos='fade-up' data-aos-duration='1500'>About Me</h1>
        <div className='aboutme-details' data-aos='fade-up' data-aos-duration='1500'>
          <div className='aboutme-img'>
            <img src={charles} alt='profile' />
          </div>
          <div className='aboutme-text'>
            <div>
              <p>
                Hi, I'm Charles Lennard C. Amon, a Fullstack Developer with a passion for creating dynamic and responsive web applications. I specialize in both frontend and backend development, ensuring that your projects are not only visually appealing but also functionally robust.
              </p><br/>
              <p>
                With a strong foundation in HTML, CSS, JavaScript, and various frameworks, I bring your ideas to life through code. Whether it's building interactive user interfaces or developing server-side logic, I handle every aspect of the development process.
              </p><br/>
              <p>
                Let's collaborate to turn your vision into reality!
              </p>
            </div>
            

            <div className='aboutme-achievements'>
              <div className='aboutme-achievement'>
                <h1>
                  <CountUp from={0}
                    to={6}
                    separator=","
                    direction="up"
                    duration={0.5}
                    className="count-up-text"
                  />+
                </h1>
                <p>YEARS OF EXPERIENCE</p>
              </div>
              <hr />
              <div className='aboutme-achievement'>
                <h1><CountUp from={0}
                    to={8}
                    separator=","
                    direction="up"
                    duration={0.5}
                    className="count-up-text"
                  />+</h1>
                <p>PROJECTS COMPLETED</p>
              </div>
              <hr />
              <div className='aboutme-achievement'>
                <h1><CountUp from={0}
                    to={2}
                    separator=","
                    direction="up"
                    duration={0.5}
                    className="count-up-text"
                  />+</h1>
                <p>CERTIFICATIONS</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='tech-stack'>
        {
          techStacks.map((techStack, index) =>{
            return (
              <div className={`${techStack.stack} stack`} key={index} data-aos='fade-up' data-aos-duration='1500'>
                <h1>{techStack.stack.charAt(0).toUpperCase() + techStack.stack.slice(1)}</h1>
                  <div className='icons-container'>
                    {
                      techStack.languages.map((language, index) => {
                        return (
                          <div className='icon-details' key={index}>
                            <img src={language.icon} alt={language.name} />
                            <label htmlFor="">{language.name}</label>
                          </div>
                        )
                      })
                    }
                  </div>
               </div>
            )
          })
        }
      </div>
    
    </div>
  )
}

export default AboutMe
