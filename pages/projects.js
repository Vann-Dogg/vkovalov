import React, { Component } from 'react'
import { motion } from 'framer-motion'
import ProjectsTitle from '../components/projects/ProjectsTitle'
import ProjectsSlider from '../components/projects/ProjectsSlider'

export default class Projects extends React.Component {
    render() {
        return (
            <motion.div className="loading">
                <div id="projects-page" className="page-content">
                    <ProjectsTitle />
                    <br/>
                    <ProjectsSlider />
                </div>
            </motion.div> 
        )
    }
}