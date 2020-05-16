import React from 'react'
import Menu from './Menu'
import * as ReactBS from 'react-bootstrap'
import Link from 'next/link'


export default function Header() {
  return (
    <header id="header">
      <ReactBS.Container>
        <ReactBS.Navbar expand="lg">
          <Link href="/">
            <span className="navbar-brand">V.Kovalov</span>
          </Link>
            <ReactBS.Navbar.Toggle aria-controls="basic-navbar-nav" />
            <ReactBS.Navbar.Collapse id="basic-navbar-nav">
                <Menu />
            </ReactBS.Navbar.Collapse>
        </ReactBS.Navbar>
      </ReactBS.Container>
    </header>
  )
}