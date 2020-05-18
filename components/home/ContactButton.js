import React, { Component } from 'react'
import Link from 'next/link'

export default class ContactButton extends React.Component {
  
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
        {this.state.loading || !this.state.page ? (
              <div></div>
            ) : ( 
              <Link  href={this.state.page.acf.cb_link}>
                <a className="btn btn-purple">
                  {this.state.page.acf.cb_text}
                </a> 
              </Link>  
          )} 
      </>
    )
  }
}