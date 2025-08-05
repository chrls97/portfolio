import React, { useState } from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faPhoneVolume, faLocationDot, faPaperPlane } from '@fortawesome/free-solid-svg-icons'

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
    if (isSubmitting) return;
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

      console.log("email sent successfully");

    }catch(error){
      console.log("email did not sent:", error)
    }finally{
      setIsSubmitting(false)
    }
  }

  return (
    <div id="contact">
      <div className='contact-header' data-aos='fade-up' data-aos-duration='1500'>
        <span>Get In Touch</span>
      </div>
      <div className='contact-section'>
        <div className="contact-left" data-aos='fade-up' data-aos-duration='1500'>
          <h2>Let's Talk</h2>
          <p>I'm currently available to take a new projects, so feel free to send me a message about anything that you want me to work on. You can contact me anytime.</p>
          <div className='contact-details'>
            {contact_infos.map((info, index) => {
              return (
                <div className='contact-detail' key={index}>
                  <span>{info.text}</span>
                  <FontAwesomeIcon icon={info.icon} className='contact-icon' />
                </div>
              )
            })}
              
          </div>

          
          <div className='contact-follow'>
            <h2 className='follow-text'>Follow me</h2>
            {follow_socials.map((social, index) => {
              return(
                
                <a href={social.link} key={index}><FontAwesomeIcon icon={social.icon}  /></a>
              )
            })}
          </div>
            

        </div>
        <hr />
        <div className='contact-right' data-aos='fade-up' data-aos-duration='1500'>
          <form onSubmit={sendEmail}>
            <label htmlFor="">Your Name</label>
            <input type="text" placeholder='Your Name' value={name} onChange={(e)=>setName(e.target.value)} required />
            <label htmlFor="">Your Email</label>
            <input type="email" placeholder='Your Email' value={email} onChange={(e)=>setEmail(e.target.value)} required />
            <label htmlFor="">Write you message here</label>
            <textarea placeholder='Write you message here' value={message} onChange={(e)=>setMessage(e.target.value)} required rows='8'></textarea>
            <button type='submit' className='submit-btn' disabled={isSubmitting}> <FontAwesomeIcon icon={faPaperPlane}  /> {isSubmitting? 'Email Sending...' : 'Send'}</button>
          </form>
        </div>
      </div>
      
    </div>
  )
}

export default Contact
