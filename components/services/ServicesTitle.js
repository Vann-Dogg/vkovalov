import React, { Component } from 'react'

export default class ServicesTitle extends React.Component {
  
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
              <div>Loading...</div>
            ) : ( 
            <h1 className="uppercase">
                {this.state.page.title}   
            </h1>
          )} 
      </>
    )
  }
}