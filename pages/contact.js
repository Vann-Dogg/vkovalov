import React, { Component } from 'react'
import { motion } from 'framer-motion'

const PageVariants = {
    initial: {
      opacity: 0,
      y: "-10vh",
      scale: 0.8
    },
    in: {
        opacity: 1,
        y: 0,
        scale: 1
    },
    out: {
        opacity: 0,
        y: "-10vh",
        scale: 0.8
    }
};
  
const PageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 1
};

export default class Contact extends React.Component {
  render() {
    return (
      <motion.div
        initial="out"
        animate="in"
        exit="out"
        variants={PageVariants}
        transition={PageTransition}
        className="loading"
      >
        <div id="contact-page">
          <h1 className="page-title uppercase text-center">CONTACT</h1>
        </div>
      </motion.div> 
    )
  }   
}