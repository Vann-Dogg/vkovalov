import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import '../assets/index.scss'
import * as ReactBS from 'react-bootstrap'
//import ParticlesBg from "particles-bg";
import Header from '../components/Header'

// This default export is required in a new `pages/_app.js` file.
export default function App({ Component, pageProps }) {
  return (
      <>
        <Header />
        <main id="main">
            <ReactBS.Container className="content">
              <Component {...pageProps} />
            </ReactBS.Container>
        </main>
      </>
    )
}