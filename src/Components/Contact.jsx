import React, { useState } from 'react'
import emailjs from '@emailjs/browser'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faPhoneVolume, faLocationDot, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { toast } from 'react-toastify';

const contact_infos = [
  { text: 'camon1107@gmail.com', icon: faEnvelope},
  { text: '+63 922 792 0858', icon: faPhoneVolume},
  { text: 'Bacoor City, Cavite', icon: faLocationDot}
]

const follow_socials = [
  {link:'https://github.com/chrls97' , icon:faGithub},
  {link:'https://www.linkedin.com/in/charles-lennard-amon-533715169/' , icon:faLinkedinIn}
]

const Contact = () => {
  // State to track if form is being submitted
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const sendEmail = async (e) =>{
    e.preventDefault();

    // Prevent multiple submissions
    if (isSubmitting)
      return;
    
    setIsSubmitting(true); // Set loading state

    try{
      const serviceId = import.meta.env.VITE_SERVICE_ID;
      const templateId = import.meta.env.VITE_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_PUBLIC_KEY;

      const templateParams = {
        from_name: name,
        from_email: email,
        to_name: "Charles Lennard C. Amon",
        message: message
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      setName('');
      setEmail('');
      setMessage('');

      toast.success("Email sent successfully")

    }catch(error){
      toast.error("Email dit non sent: ", error.message)
      console.log("email did not sent:", error)
    }finally{
      setIsSubmitting(false)
    }
  }

  return (
    <div id="contact" className='px-[5%] sm:px-[10%] py-0 sm:py-[30px] flex flex-col justify-center items-center'>
      <div className='text-[3rem] font-bold'  data-aos="fade-up" data-aos-duration="1500">
        <span>Get In Touch</span>
      </div>
      <div className='flex flex-col sm:flex-row gap-5 mt-5'>
        <div className="w-full sm:w-1/2 flex flex-col items-center sm:items-end gap-5"  data-aos="fade-right" data-aos-duration="1500">
          <h2 className='text-3xl sm:text-4xl font-semibold'>Let's Talk</h2>
          <p className='max-w-220 text-center sm:text-right text-[18px]'>I'm currently available to take a new projects, so feel free to send me a message about anything that you want me to work on. You can contact me anytime.</p>
          <div className='flex flex-col text-[18px] gap-5 items-center sm:items-end'>
            {contact_infos.map((info, index) => {
              return (
                <div className='flex items-center justify-end gap-2' key={index}>
                  <span>{info.text}</span>
                  <FontAwesomeIcon icon={info.icon} className='contact-icon' />
                </div>
              )
            })}
              
          </div>

          
          <div className='flex flex-row gap-3 text-[25px] font-semibold items-center'>
            <h2>Follow me</h2>
            {follow_socials.map((social, index) => {
              return(
                
                <a className='border-2 border-white rounded-full px-2 py-1 text-[22px] hover:bg-white hover:text-gray-700 transition-all duration-400' target='_blank' href={social.link} key={index}><FontAwesomeIcon icon={social.icon}  /></a>
              )
            })}
          </div>
            

        </div>



        <hr className='border-[0.5px] border-gray-500  h-auto'/>
        <div className="w-full sm:w-1/2"  data-aos="fade-left" data-aos-duration="1500">
          <form onSubmit={sendEmail} className='flex flex-col gap-2'>
            <label htmlFor="" className='text-[18px]'>Your Name</label>
            <input type="text" placeholder='Your Name' value={name} onChange={(e)=>setName(e.target.value)} required className='text-[#2b2a2a] bg-white px-3 py-2 rounded text-[15px]'/>
            <label htmlFor="" className='text-[18px]'>Your Email</label>
            <input type="email" placeholder='Your Email' value={email} onChange={(e)=>setEmail(e.target.value)} required className='text-[#2b2a2a] bg-white px-3 py-2 rounded text-[15px]'/>
            <label htmlFor="" className='text-[18px]'>Write you message here</label>
            <textarea placeholder='Write you message here' value={message} onChange={(e)=>setMessage(e.target.value)} required rows='7' className='text-[#2b2a2a] bg-white px-3 py-2 rounded text-[15px]'></textarea>
            <button type='submit' className='text-[18px]  text-white bg-gradient-to-r from-[#0639a7] to-[#15b5ff]  px-5 py-2 rounded-full mt-2 cursor-pointer' disabled={isSubmitting}> <FontAwesomeIcon icon={faPaperPlane}  /> {isSubmitting? 'Email Sending...' : 'Send'}</button>
          </form>
        </div>
      </div>
      
    </div>
  )
}

export default Contact
