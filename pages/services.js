import React, { Component } from 'react'
import { motion } from 'framer-motion'
import ServicesTitle from '../components/services/ServicesTitle'
import ServicesCards from '../components/services/ServicesCards'

export default class Services extends React.Component {
    render() {
        return (
            <motion.div id="services-page" className="page-content">
                <ServicesTitle />
                <br/>
                <ServicesCards />
            </motion.div> 
        )
    }
}