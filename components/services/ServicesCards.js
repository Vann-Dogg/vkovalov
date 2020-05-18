import React, { Component } from 'react'
import axios from 'axios'
import * as ReactBS from 'react-bootstrap'

export default class ServicesCards extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      loading: false,
      services: [],
      error: ''
    }
  }

  componentDidMount() {
    const url = 'http://vkovalov.me/wp-json/wp/v2/services?filter[orderby]=date&order=asc';
    this.setState(
      { loading: true }, () =>{
        axios.get(url)
          .then(res => { 
              this.setState({
                loading: false,
                services: res.data
              })
            }
          )
          .catch( 
            error => this.setState({ 
            loading: false, 
            error: '' 
          }))  
      }
    );
  }
  render() {
    const { services } = this.state;
    return (
      <ReactBS.Container>
        {services.length ? (
          <ReactBS.Row className="services-cards">
          {services.map(service => (
            <ReactBS.Col sm={6} lg={3} className="services-cards__item">
              <ReactBS.Card className="services-cards__content text-center">
                <div class="card-head">
                  <h3 class="card-title">{service.title.rendered}</h3>
                </div>
              </ReactBS.Card>
            </ReactBS.Col>
          ))}
          </ReactBS.Row>
        ) : '' }
      </ReactBS.Container>
    )
  }
}