import React, {useState, useEffect} from 'react'
import { projects } from '../../assets/assets'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleLeft,faCircleRight } from '@fortawesome/free-solid-svg-icons'

const ProjModal = ({open, onClose, projectId}) => {

  const [project, setProject] = useState([]);
  const [slides, setSlides] = useState(0)

  useEffect(()=>{
    const selectedProject = projects.filter(item => item.id === projectId);
    setProject(selectedProject[0])
  },[open,projectId])

  
  if(!open)
    return null
  
  

  return (
    <>
    {/* OVERLAY */}
    <div className='px-[5%] fixed top-0 bottom-0 left-0 right-0 bg-[rgba(0,0,0,.5)] z-50'>
      <div className='max-w-[1300px] my-[1.5rem] mx-auto mt-20'>
        {/* Modal Content */}
        <div className='flex flex-col'>
          {/* Modal Header */}
          <div className='flex justify-between items-center py-2 px-5 bg-gradient-to-r from-[#012d4d] to-[#012d4d] text-white  rounded-t-lg'>
            <p  className='text-[20px] font-semibold'>{project.title}</p>
            <p onClick={onClose} className='cursor-pointer pr-2 hover:text-red-400 transition-all duration-100 font-semibold'>X</p>
          </div>

          {/* Modal Body */}
          <div className='bg-gradient-to-br from-[#1b1b1b] to-[#01223a] px-5 py-3 text-white'>
            <div className='flex flex-col-reverse  sm:flex-row justify-between items-center  flex-wrap'>
              <div className='flex basis-[20%] sm:flex-col gap-x-2 sm:gap-y-2 max-h-[500px] overflow-auto pb-2 sm:pb-0 sm:pr-3'>
                {
                  project.details.map((item, index) =>{
                  return(
                    <>
                    <img onClick={()=>setSlides(index)} src={item.image} alt={item.description} title={item.description} className={`w-[200px] sm:w-full cursor-pointer border-1 border-gray-500 rounded ${slides === index ? 'border-5 border-gray-300' : ''}`} />
                    </>
                  )
                  })
                }
              </div>
           
              <div className='basis-[79%] text-center mb-5 ms:mb-0'>
                <div className='flex justify-center h-auto xl:h-105 w-full'>
                  {
                    project.details.map((item, index) =>{
                      return(
                        <>
                          <img src={item.image} alt={item.description} title={item.description} key={index} className={`w-auto cursor-pointer border-1 border-gray-500 rounded mb-2 object-cover ${slides === index ? '' : 'hidden'} `} />
                        </>
                      )
                    })
                  }
                </div>

                <div className='flex justify-center mb-2'>
                  {
                    project.details.map((item, index) =>{
                      return(
                        <>
                         <p className={`text-2xl font-semibold ${slides === index ? '' : 'hidden'} `} >{item.description}</p> 
                        </>
                      )
                    })
                  }
                </div>
                
                <div className='flex gap-1 justify-center'>
                  <FontAwesomeIcon onClick={()=>setSlides(slides === 0? project.details.length -1 : slides-1)} icon={faCircleLeft}  className='hover:text-gray-300 text-[30px] cursor-pointer'/>
                  <span className='flex gap-1 justify-center items-center'>
                    {
                      project.details.map((_,index) => {
                        return (
                        <button key={index} onClick={()=>setSlides(index)} className={`${slides === index? 'bg-[#ffffff]' : 'bg-[#ffffff73]'} h-3 px-[6px]  ml-[4px] rounded-full cursor-pointer`}></button>
                      )
                      })
                    }
                  </span>
                  <FontAwesomeIcon onClick={()=>setSlides(slides === project.details.length - 1 ? 0 : slides+1)} icon={faCircleRight} className='hover:text-gray-300 text-[30px] cursor-pointer'/>
                </div>
                
                
              </div>

              
            </div>
          </div>


          {/* Modal Footer */}
          <div className='flex justify-end items-end py-2 px-5 bg-gradient-to-r from-[#012d4d] to-[#012d4d] rounded-b-lg'>
            <button  onClick={onClose} className='bg-white text-gray-800 px-3 cursor-pointer font-semibold rounded'>Close</button>
          </div>


        </div>
      </div>
    </div>
    </>
  )
}

export default ProjModal
