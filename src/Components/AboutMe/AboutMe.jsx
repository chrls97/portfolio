import React, { useEffect } from 'react'
import './AboutMe.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
import charles from '../../assets/charles.jpg'

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

const AboutMe = () => {

  const frontStacks = [
    { name: 'HTML', icon: html},
    { name: 'CSS', icon: css},
    { name: 'JavaScript', icon: js},
    { name: 'React', icon: react},
    { name: 'Bootstrap', icon: bootstrap},
    { name: 'Tailwind', icon: tailwind}];

  const backendStack = [
    { name: 'PHP', icon: php},
    { name: 'Laravel', icon: laravel},
    { name: 'NodeJs', icon: nodejs},
    { name: 'ExpressJs', icon: expressjs},
    { name: 'mySql', icon: mysql},
    { name: 'MongoDB', icon: mongodb}]

  const otherStack = [
    { name: 'VS Code', icon: vscode},
    { name: 'Git', icon: git},
    { name: 'Github', icon: github},
    { name: 'Postman', icon: postman},
    { name: 'NPM', icon: npm},
    { name: 'Photoshop', icon: photoshop}]


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
                <h1>6+</h1>
                <p>YEARS OF EXPERIENCE</p>
              </div>
              <hr />
              <div className='aboutme-achievement'>
                <h1>8+</h1>
                <p>PROJECTS COMPLETED</p>
              </div>
              <hr />
              <div className='aboutme-achievement'>
                <h1>2+</h1>
                <p>CERTIFICATIONS</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <h1>Techonologies i use</h1> */}
      <div className='tech-stack'>
        <div className='frontend stack' data-aos='fade-up' data-aos-duration='1500'>
          <h1>Frontend</h1>
          <div className='icons-container'>
            {frontStacks.map((stack, index) => {
              return (
                <div className='icon-details'>
                  <img src={stack.icon} alt={stack.name} />
                  <label htmlFor="">{stack.name}</label>
                </div>
              )
            })}
          </div>
        </div>

        <div className='backend stack'  data-aos='fade-up' data-aos-duration='1500'>
          <h1>Backend</h1>
          <div className='icons-container'>
            {backendStack.map((stack, index) => {
              return (
                <div className='icon-details'>
                  <img src={stack.icon} alt={stack.name} />
                  <label htmlFor="">{stack.name}</label>
                </div>
              )
            })}
          </div>
        </div>

        <div className='other stack' data-aos='fade-up' data-aos-duration='1500'>
          <h1>Tools</h1>
          <div className='icons-container' >
            {otherStack.map((stack, index) => {
              return (
                <div className='icon-details'>
                  <img src={stack.icon} alt={stack.name} />
                  <label htmlFor="">{stack.name}</label>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    
    </div>
  )
}

export default AboutMe
