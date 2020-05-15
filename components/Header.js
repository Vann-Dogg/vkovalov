import React from 'react'
import Menu from './Menu'
import * as ReactBS from 'react-bootstrap'
import Link from 'next/link'


export default function Header() {
  return (
    <header id="header" className="flex-column justify-content-around align-items-center">
      <Link className="navbar-brand" href="/">
        <img src='./logo.png' alt="Volodymyr Kovalov" />
      </Link>
      <ReactBS.Navbar expand="lg" className="flex-column w-100">
          <ReactBS.Navbar.Toggle aria-controls="basic-navbar-nav" />
          <ReactBS.Navbar.Collapse className="w-100" id="basic-navbar-nav">
              <Menu />
          </ReactBS.Navbar.Collapse>
      </ReactBS.Navbar>
    </header>
  )
}