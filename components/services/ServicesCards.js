import React, { Component } from 'react'
import Link from 'next/link'
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
    const rest = process.env.NEXT_PUBLIC_REST_LINK;
    const url = rest+'wp-json/wp/v2/services?filter[orderby]=date&order=asc';
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
                <div class="card-head d-flex flex-column justify-content-center">
                  <h3 class="card-title d-flex align-items-center w-100 justify-content-center mb-2">{service.title.rendered}</h3>
                  <div className="price-wrapper">
                    from <span className="price">{service.acf.price}$</span> / {service.acf.price_type}
                  </div>
                </div>
                <ReactBS.Card.Body>
                  <div className="services-list" dangerouslySetInnerHTML={{ __html: service.content.rendered }} />
                  <Link href="contact">
                    <a className="btn btn-purple">Click to Order</a>
                  </Link>
                </ReactBS.Card.Body>
              </ReactBS.Card>
            </ReactBS.Col>
          ))}
          </ReactBS.Row>
        ) : '' }
      </ReactBS.Container>
    )
  }
}