import React, { Component } from 'react'
import { motion } from 'framer-motion'

export default class Contact extends React.Component {
  render() {
    return (
      <motion.div className="loading">
        <div id="contact-page" className="page-content">
            <div className="page-title-block">
              <h1 className="page-title uppercase text-center">CONTACT</h1>
            </div>
        </div>
      </motion.div> 
    )
  }   
}