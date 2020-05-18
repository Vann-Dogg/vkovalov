import React, { Component } from 'react'
import axios from 'axios'
import * as ReactBS from 'react-bootstrap'

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
    const url = rest+'wp-json/wp/v2/projects?filter[orderby]=date&order=asc';
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
    return (
      <ReactBS.Container>
            {projects.length ? (     
                <ReactBS.Row className="projects">
                    {projects.map(project => (
                        <ReactBS.Col className="project" sm={3}>
                            <ReactBS.Card className="project-card" id={project.id}>
                                <div>
                                    <img src={project.acf.cover} alt="project.title.rendered" />
                                </div>
                                <ReactBS.Card.Body>
                                    <span>{project.title.rendered}</span>
                                    <span>{project.acf.type}</span>
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