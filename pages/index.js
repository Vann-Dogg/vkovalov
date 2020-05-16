import React, { Component } from 'react'
import { motion } from 'framer-motion'
import Head from 'next/head'
import Name from '../components/home/Name'
//import Positions from '../components/home/Positions'
import ContactButton from '../components/home/ContactButton'

const PageVariants = {
  initial: {
    opacity: 0,
    y: "-100vh",
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

export default class Index extends React.Component {
  
  state = {
    loading: true
  };
  
  async componentDidMount() {
    const url = 'http://vkovalov.me/wp-json/wp/v2/pages/17';
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ 
      page: data, 
      loading: false
    });
  }

  render() {
    return (
      <>
        <motion.div 
          initial="out"
          animate="in"
          exit="out"
          variants={PageVariants}
          transition={PageTransition}
          className="loading"
        >
          {this.state.loading || !this.state.page ? (
              <div className="text-center">Loading...</div>
            ) : (
            <>  
            <Head>
              <title>{this.state.page.acf.seo_title}</title>
              <meta name="title" content={this.state.page.acf.seo_title} key="title" />
              <meta name="description" content={this.state.page.acf.seo_description} />
              <meta name="author" content="Volodymyr Kovalov" />
              <meta property="og:title" content={this.state.page.acf.seo_title} key="title" />
            </Head>
            <div id="home-page" className="content-inside text-center">
              <Name />
              <br/>
              <p>HERE MUST BE POSITIONS</p>
              <br/>
              <p>HERE MUST BE DESCRIPTION</p>
              <br/>
              <ContactButton />
            </div>
            </>
          )} 
        </motion.div> 
      </>
    )
  }
}