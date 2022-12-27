import React, {useState} from 'react'
import { images } from '../../constants'
import { AppWrap } from '../../wrapper'
import { client } from '../../client'
import './footer.scss'


const Footer = () => {

  const [formData, setFormData] = useState({name: '', email: '', message: ''})
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false)

  const { name, email, message } = formData;

  const handleChangeInput = (event) => {
    const { name, value } = event.target;

    setFormData({ ...formData, [name]: value });
  }

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: 'contact',
      name: name,
      email: email,
      message: message,
    }

    client.create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true); 
      })
  }


  return (
    <>
      <h2 className="head-text">Let's Talk some Business here</h2>

      <div className="app__footer-cards">
         <div className="app__footer-card">
          <img src={images.email} alt="Email"/>
          <a href="mailto:salvatoluice5@gmail.com" className='p-text'>salvatoluice5@gmail.com</a>
         </div>
         <div className="app__footer-card">
          <img src={images.mobile} alt="Mobile"/>
          <a href="tel: +254113794219" className='p-text'>+254-1-13-794-219</a>
         </div>
      </div>
      {
        !isFormSubmitted ?
     
      <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input type="text" placeholder='Your Name' name='name' value={name} onChange={handleChangeInput} className='p-text'/>
          </div>
          <div className="app__flex">
            <input type="email" placeholder='Your Email Address' name='email' value={email} onChange={handleChangeInput} className='p-text'/>
          </div>
           <div>
            <textarea 
              className='p-text'
              placeholder='Your Message'
              value={message}
              name="message"
              onChange={handleChangeInput}
            />
           </div>
           <button type='button' className='p-text' onClick={handleSubmit}>{loading ? 'Sending' : 'Send Message'}</button>
      </div> 
      : <div>
          <h3 className='head-text'>Thank you! I'll get back to you shortly!</h3>
      </div>
      
       }
    </>
  )
}

export default AppWrap(Footer, 'contact');