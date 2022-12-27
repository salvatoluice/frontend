import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { AppWrap } from '../../wrapper'

import './about.scss';
import about01 from '../../assets/about01.png'
import about02 from '../../assets/about02.png'
import about03 from '../../assets/about03.png'

const About = () => {

  return (
    <>
      <h2 className="head-text">I Know that <span>Good Development </span> <br />means  <span>Good Business</span></h2>

      <div className="app__profiles">
        {/* {abouts.map((about, index) => ( */}
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
          >
            <img src={about01} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>Frontend Developer</h2>
            <p className="p-text" style={{ marginTop: 10 }}>HTML/CSS/Javascript/ReactJs/mui</p>
          </motion.div>

          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
          >
            <img src={about02} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>Backend Dev</h2>
            <p className="p-text" style={{ marginTop: 10 }}>Ruby on rails, PostreSQL, Firebase and rest apis</p>
          </motion.div>

          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
          >
            <img src={about03} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>Fulstack web developer</h2>
            <p className="p-text" style={{ marginTop: 10 }}>Moringa school</p>
          </motion.div>
        
      </div>
    </>
  );
};

export default AppWrap(About, 'about')
