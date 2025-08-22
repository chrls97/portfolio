import React, { useEffect } from 'react'
import CountUp from '../Animation/CountUp';
import { assets, techStacks } from '../assets/assets';

const AboutMe = () => {

  return (
    <section id='aboutme' className='w-full relative px-[5%] py-[20px] sm:py-[80px]'>
      <div className='max-w-[1520px] mx-auto'>
        <div className='flex flex-col gap-10 items-center'  data-aos='fade-up' data-aos-duration='1500'>
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
              

              <div className='flex  flex-wrap md:flex-none mt-3 sm:mt-10  justify-center items-center'>
                <div className='flex flex-col w-full md:w-1/3 justify-center items-center text-center gap-2 lg:border-r  px-5'>
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
                <div className='flex flex-col w-full md:w-1/3 justify-center items-center text-center gap-2 lg:border-r  px-5'>
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
                <div className='flex flex-col w-full md:w-1/3 justify-center items-center text-center gap-2'>
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
              </div>
            </div>
          </div>
        </div>

        <div className='flex justify-center lg:justify-between flex-wrap lg:flex-nowrap gap-5 w-full items-center text-center mt-15'  data-aos='fade-up' data-aos-duration='1500'>
          {
            techStacks.map((techStack, index) =>{
              return (
                <div className='w-full md:max-w-[350px] lg:max-w-[550px] p-9 rounded-[10px] bg-[rgba(141,140,140,0.062)] shadow-lg' key={index} >
                  <h1 className='text-3xl font-semibold mb-8'>{techStack.stack.charAt(0).toUpperCase() + techStack.stack.slice(1)}</h1>
                    <div className='flex flex-wrap items-center justify-center gap-5'>
                      {
                        techStack.languages.map((language, index) => {
                          return (
                            <div className='flex flex-col justify-center items-center gap-2 cursor-pointer hover:translate-y-[-5px] transition-all duration-500' key={index}>
                              <img src={language.icon} alt={language.name} className='w-15' />
                              <label >{language.name}</label>
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
      
    
    </section>
  )
}

export default AboutMe
