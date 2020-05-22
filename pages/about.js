import React, { Component } from 'react'
import { motion } from 'framer-motion'

export default class About extends React.Component {
    render() {
      return (
        <motion.div className="loading">
          <div id="about-page" className="page-content">
            <div className="page-title-block">
              <h1 className="page-title uppercase text-center">ABOUT</h1>
            </div>
          </div> 
        </motion.div>
      )
    }
}