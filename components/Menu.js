import React, { Component } from 'react'
import Link from 'next/link'

export default class Menu extends React.Component {
  render() {
    return(
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link href="/">
            <a className="nav-link">
              Home
            </a>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/services">
            <a className="nav-link">
              Services
            </a>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/projects">
            <a className="nav-link">
              My Projects
            </a>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/about">
            <a className="nav-link">
              About Me
            </a>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/contact">
            <a className="nav-link">
              Contact Me
            </a>
          </Link>
        </li>
      </ul>
    )
  }
}
