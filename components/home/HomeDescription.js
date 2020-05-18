import React, { Component } from 'react'

export default class HomeDescripion extends React.Component {
  
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
        {this.state.loading || !this.state.page ? (
              <div></div>
            ) : ( 
            <p className="home-description">
                {this.state.page.acf.description} 
            </p>
          )} 
      </>
    )
  }
}