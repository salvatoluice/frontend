import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { AppWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './skills.scss';
import HTML from '../../assets/html.png'
import css from '../../assets/css.png'
import git from '../../assets/git.png'
import redux from '../../assets/redux.png'
import sass from '../../assets/sass.png'
import react from '../../assets/react.png'
import javascript from '../../assets/javascript.png'

const Skills = () => {

  return (
    <>
      <h2 className="head-text">My Skills & Education</h2>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
            >
              <div
                className="app__flex"
                style={{ backgroundColor: '#6b7688' }}
              >
                <img src={HTML} alt="html"/>
              </div>
              <p className="p-text">HTML</p>
            </motion.div>


            
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
            >
              <div
                className="app__flex"
                style={{ backgroundColor: '#6b7688' }}
              >
                <img src={css} alt="html"/>
              </div>
              <p className="p-text">CSS</p>
            </motion.div>

            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
            >
              <div
                className="app__flex"
                style={{ backgroundColor: '#6b7688' }}
              >
                <img src={javascript} alt="html"/>
              </div>
              <p className="p-text">Javascript</p>
            </motion.div>

            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
            >
              <div
                className="app__flex"
                style={{ backgroundColor: '#6b7688' }}
              >
                <img src={sass} alt="html"/>
              </div>
              <p className="p-text">SCSS</p>
            </motion.div>

            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
            >
              <div
                className="app__flex"
                style={{ backgroundColor: '#6b7688' }}
              >
                <img src={react} alt="html"/>
              </div>
              <p className="p-text">ReactJs</p>
            </motion.div>

            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
            >
              <div
                className="app__flex"
                style={{ backgroundColor: '#6b7688' }}
              >
                <img src={redux} alt="html"/>
              </div>
              <p className="p-text">Redux</p>
            </motion.div>

            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
            >
              <div
                className="app__flex"
                style={{ backgroundColor: '#6b7688' }}
              >
                <img src={git} alt="html"/>
              </div>
              <p className="p-text">Git Version Control</p>
            </motion.div>

            
         
        </motion.div>
        <div className="app__skills-exp">
            <motion.div
              className="app__skills-exp-item"
            >
              <div className="app__skills-exp-year">
                <p className="bold-text">2022</p>
              </div>
              <motion.div className="app__skills-exp-works">
                  <>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__skills-exp-work"
                      data-tip
                      // data-for={work.name}
                      // key={work.name}
                    >
                      <h4 className="bold-text">Moringa School</h4>
                      <p className="p-text">Software Development</p>
                      <small className="p-text">Frontend & Backend</small>
                    </motion.div>
                  </>
              </motion.div>
            </motion.div>

            <motion.div
              className="app__skills-exp-item"
            >
              <div className="app__skills-exp-year">
                <p className="bold-text">2020</p>
              </div>
              <motion.div className="app__skills-exp-works">
                  <>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__skills-exp-work"
                      data-tip
                      // data-for={work.name}
                      // key={work.name}
                    >
                      <h4 className="bold-text">Umma University</h4>
                      <p className="p-text">Bachelors Degree</p>
                      <small className="p-text">Information Technology</small>
                    </motion.div>
                  </>
              </motion.div>
            </motion.div>

            <motion.div
              className="app__skills-exp-item"
            >
              <div className="app__skills-exp-year">
                <p className="bold-text">2019</p>
              </div>
              <motion.div className="app__skills-exp-works">
                  <>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__skills-exp-work"
                      data-tip
                    >
                      <h4 className="bold-text">Secondary School</h4>
                      <p className="p-text">High school Diploma</p>
                      <small className="p-text">Completed</small>
                    </motion.div>
                  </>
              </motion.div>
            </motion.div>
        </div>
      </div>
    </>
  );
};

export default AppWrap(Skills, 'skills');