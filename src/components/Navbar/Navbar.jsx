import React, { useState } from 'react'

import './navbar.scss'
import { images } from '../../constants/index'

import { HiMenuAlt4, HiX } from 'react-icons/hi'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [toggle, setToggle] = useState(false)



  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        <h1 className="head-text">Luis</h1>
        {/* <img src={images.logo} alt="logo"/> */}
      </div>
      <ul className='app__navbar-links'>
        {['Home', 'About', 'Work', 'Skills', 'Contacts'].map((item) => (
          <li className='app__flex p-text' key={`link-${item}`}>
            <div/>
            <Link to={`/${item}`}>{item}</Link>
          </li>
        ))}
      </ul>
      <div className="app__navbar-menu">
          <HiMenuAlt4 onClick={() => setToggle(true)} />


          {
            toggle && (
              <motion.div
                whileInView={{ x: [300, 0]}}
                transition={{  duration: 0.85, ease: 'easeOut'}}
              
              >

                <HiX onClick={() => setToggle(false)} />
                <ul>
                  {['Home', 'About', 'Work', 'Skills', 'Contacts'].map((item) => (
                        <li key={item}>
                          <a href={`#${item}`} onClick={() => setToggle(false)}>{item}</a>
                        </li>
                  ))}
                </ul>

              </motion.div>
            )
          }
      </div>
    </nav>
  )
}

export default Navbar