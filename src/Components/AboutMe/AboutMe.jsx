import React, { useEffect } from 'react'
import CountUp from '../../Animation/CountUp';
import { assets, techStacks } from '../../assets/assets';

const AboutMe = () => {
  // data-aos='fade-up' data-aos-duration='1500'
// data-aos='fade-up' data-aos-duration='1500'
  return (
    <div id='aboutme' className='px-[5%] sm:px-[10%] py-[60px]'>
      <div className='flex flex-col gap-10 items-center'>
        <h1 className='text-[3rem] font-semibold mb-2' >ABOUT ME</h1>
        <div className='flex flex-col sm:flex-row justify-center items-center gap-10' >
          <div className='flex items-center justify-center w-full lg:1/2 xl:w-2/8'>
            <img src={assets.profile} alt='profile' className='w-90 rounded-4xl' />
          </div>

          <div className='w-full lg:1/2 xl:w-6/8'>
            <div className='flex flex-col gap-5 lg:text-[18px] xl:text-[21px] text-justify'>
              <p>
                Hi, I'm Charles Lennard C. Amon, a Fullstack Developer with a passion for creating dynamic and responsive web applications. I specialize in both frontend and backend development, ensuring that your projects are not only visually appealing but also functionally robust.
              </p>
              <p>
                With a strong foundation in HTML, CSS, JavaScript, and various frameworks, I bring your ideas to life through code. Whether it's building interactive user interfaces or developing server-side logic, I handle every aspect of the development process.
              </p>
              <p className='text-[22px] lg:text-[21px] xl:text-[26px] font-semibold text-center sm:text-justify'>
                Let's collaborate to turn your vision into reality!
              </p>
            </div>
            

            <div className='grid md:grid-cols-2 xl:grid-cols-3 mt-3 sm:mt-10 gap-5'>
              <div className='flex flex-col justify-center text-center gap-2 sm:border-r sm:border-b-0 pr-5'>
                <h1 className='text-[3rem] sm:text-[2rem] xl:text-[3rem] font-semibold bg-gradient-to-r from-[#0639a7] to-[#15b5ff] bg-clip-text text-transparent'>
                  <CountUp from={0}
                    to={6}
                    separator=","
                    direction="up"
                    duration={0.5}
                    className="count-up-text"
                  />+
                </h1>
                <p className='text-[20px] sm:text-[15px] xl:text-[20px] bg-gradient-to-r from-[#0639a7] to-[#15b5ff] bg-clip-text text-transparent font-extrabold'>YEARS OF EXPERIENCE</p>
              </div>
              

              <div className='flex flex-col justify-center text-center gap-2 sm:border-r sm:border-b-0 pr-5'>
                <h1 className='text-[3rem] sm:text-[2rem] xl:text-[3rem] font-semibold bg-gradient-to-r from-[#0639a7] to-[#15b5ff] bg-clip-text text-transparent'>
                  <CountUp from={0}
                    to={8}
                    separator=","
                    direction="up"
                    duration={0.5}
                    className="count-up-text"
                  />+
                </h1>
                <p className='text-[20px] sm:text-[15px] xl:text-[20px] bg-gradient-to-r from-[#0639a7] to-[#15b5ff] bg-clip-text text-transparent font-extrabold'>PROJECTS COMPLETED</p>
              </div>
              <div className='flex flex-col justify-center text-center gap-2'>
                <h1 className='text-[3rem] sm:text-[2rem] xl:text-[3rem] font-semibold bg-gradient-to-r from-[#0639a7] to-[#15b5ff] bg-clip-text text-transparent'>
                  <CountUp from={0}
                    to={2}
                    separator=","
                    direction="up"
                    duration={0.5}
                    className="count-up-text"
                  />+
                </h1>
                <p className='text-[20px] sm:text-[15px] xl:text-[20px] bg-gradient-to-r from-[#0639a7] to-[#15b5ff] bg-clip-text text-transparent font-extrabold'>CERTIFICATIONS</p>
              </div>

              <div>

              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-3 gap-10 mt-10'>
        {
          techStacks.map((techStack, index) =>{
            return (
              <div className='flex flex-col px-5 py-5 ' key={index} >
                <h1 className='text-3xl text-center mb-5 font-semibold'>{techStack.stack.charAt(0).toUpperCase() + techStack.stack.slice(1)}</h1>
                  <div className='grid grid-cols-5 md:gap-6 items-center  justify-center gap-5'>
                    {
                      techStack.languages.map((language, index) => {
                        return (
                          <div className='flex flex-col items-center justify-center gap-2' key={index}>
                            <img src={language.icon} alt={language.name} className='w-10' />
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
