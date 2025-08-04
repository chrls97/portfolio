import React from 'react'
import './Contact.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faPhoneVolume } from '@fortawesome/free-solid-svg-icons'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'

const Contact = () => {
  return (
    <div id="contact">
      <div className='contact-header' data-aos='fade-up' data-aos-duration='1500'>
        <span>Get In Touch</span>
      </div>
      <div className='contact-section'>
        <div className="contact-left" data-aos='fade-right' data-aos-duration='1500'>
          <h2>Let's Talk</h2>
          <p>I'm currently available to take a new projects, so feel free to send me a message about anything that you want me to work on. You can contact me anytime.</p>
          <div className='contact-details'>
            <div className='contact-detail'>
              <span>camon1107@gmail.com </span>
              <FontAwesomeIcon icon={faEnvelope} className='contact-icon' />
             
            </div>
            <div className='contact-detail'>
              <span>+63 922 792 0858 </span>
              <FontAwesomeIcon icon={faPhoneVolume} className='contact-icon' />
             
            </div>
            <div className='contact-detail'>
              <span>Bacoor City, Cavite </span>
              <FontAwesomeIcon icon={faLocationDot} className='contact-icon' />
             
            </div>
          </div>

          <h2 className='follow-text'>Follow me</h2>
          <div className='contact-follow'>
            <a href=""><FontAwesomeIcon icon={faGithub}  /></a>
            <a href=""><FontAwesomeIcon icon={faLinkedinIn}  /></a>
          </div>

        </div>
        <hr />
        <div className='contact-right' data-aos='fade-left' data-aos-duration='1500'>
          <form>
            <label htmlFor="">Your Name</label>
            <input type="text" placeholder='Name' required />
            <label htmlFor="">Your Email</label>
            <input type="email" placeholder='Email' required />
            <label htmlFor="">Write you message here</label>
            <textarea placeholder='Message' required rows='8'></textarea>
            <button type='submit' className='submit-btn'> <FontAwesomeIcon icon={faPaperPlane}  /> Send</button>
          </form>
        </div>
      </div>
      
    </div>
  )
}

export default Contact
