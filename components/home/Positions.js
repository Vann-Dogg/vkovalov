import React, { Component } from 'react'

export default class Positions extends React.Component {
      render() {
        return (
          <ul className="positions d-flex justify-content-center">
            <li className="position mx-4">
              Freelancer
            </li>
            <li className="position mx-4">
              Full Stack Web Developer
            </li>
            <li className="position mx-4">
              SEO Specialist
            </li>
          </ul>
        );
      }
  }