import React, { Component } from 'react'
import { motion } from 'framer-motion'
import Head from 'next/head'
import Name from '../components/home/Name'
import Positions from '../components/home/Positions'
import HomeDescription from '../components/home/HomeDescription'
import ContactButton from '../components/home/ContactButton'

export default class Index extends React.Component {
  
  state = {
    loading: true
  };
  
  async componentDidMount() {
    const rest = process.env.NEXT_PUBLIC_REST_LINK;
    const url = rest+'wp-json/wp/v2/pages/17';
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
        <motion.div className="loading">
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
            <div id="home-page" className="content-inside text-center page-content">
              <Name />
                <br/>
              <Positions />
                <br/>
              <HomeDescription />
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