import React from 'react'
import Menu from './Menu'
import * as ReactBS from 'react-bootstrap'
import Link from 'next/link'


export default function Header() {
  return (
    <header id="header" className="d-flex align-items-center">
      <ReactBS.Container>
        <ReactBS.Navbar expand="lg">
            <span className="navbar-brand uppercase">
              <Link href="/">V.Kovalov</Link>
            </span>
            <ReactBS.Navbar.Toggle aria-controls="basic-navbar-nav" />
            <ReactBS.Navbar.Collapse id="basic-navbar-nav">
                <Menu />
            </ReactBS.Navbar.Collapse>
        </ReactBS.Navbar>
      </ReactBS.Container>
    </header>
  )
}