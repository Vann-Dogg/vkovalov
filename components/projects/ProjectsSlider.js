import React, { Component } from 'react'
import axios from 'axios'
import * as ReactBS from 'react-bootstrap'
import Slider from "react-slick"

export default class ProjectsSlider extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      loading: false,
      projects: [],
      error: ''
    }
  }

  componentDidMount() {
    const rest = process.env.NEXT_PUBLIC_REST_LINK;
    const url = rest+'wp-json/wp/v2/projects?filter[orderby]=date';
    this.setState(
      { loading: true }, () =>{
        axios.get(url)
          .then(res => { 
              this.setState({
                loading: false,
                projects: res.data
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
    const { projects } = this.state;
    const settings = {
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: false,
      dots: true,
      infinite: true,
      touchMove: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 2
          }
        }
      ]
    };
    return (
      <ReactBS.Container>
            {projects.length ? (     
                <Slider {...settings} className="projects">
                    {projects.map(project => (
                        <div className="project">
                            <div className="project-slide" id={project.id}>
                                <img src={project.acf.cover}  alt={project.title.rendered} />
                                <div className="project-content d-flex align-items-center justify-content-center">
                                    <span>{project.title.rendered}</span>
                                </div>
                            </div>
                        </div>   
                    ))} 
                </Slider>   
            ) : '' }
      </ReactBS.Container>
    )
  }
}