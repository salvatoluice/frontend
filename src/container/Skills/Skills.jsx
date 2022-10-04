import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ReactTooltip from 'react-tooltip';

import { urlFor, client } from '../../client';
import {AppWrap} from '../../wrapper'

import './skills.scss'


const Skills = () => {


  useEffect(() => {
    const query = '*[_type == "works"]';

    client.fetch(query).then((data) => {
      setWorks(data);
      setFilterWork(data);
    });
  }, []);




  return (
    <>
      <h2 className="head-text">Here are my Skills & Experiences</h2>

      <div className="app__skills-container">
        <motion.div className='app__skills-list'>
          {
            
          }
        </motion.div>
      </div>
    </>
  )
}

export default Skills