import React, { Component } from 'react'
import * as ReactBS from 'react-bootstrap'

export default class ServicesCards extends React.Component {
  
  state = {
    loading: true
  };
  
  async componentDidMount() {
    const url = 'http://vkovalov.me/wp-json/wp/v2/pages/19';
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
        {this.state.loading || !this.state.page ? (
              <div className="text-center">Loading...</div>
            ) : ( 
            <ReactBS.Row>
                <ReactBS.Col sm={4}>

                </ReactBS.Col>
                <ReactBS.Col sm={4}>
                    
                </ReactBS.Col>
                <ReactBS.Col sm={4}>
                    
                </ReactBS.Col>
            </ReactBS.Row>
          )} 
      </>
    )
  }
}