import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../assets/index.scss'
import * as ReactBS from 'react-bootstrap'
import ParticlesBg from "particles-bg";
import Header from '../components/Header'

// This default export is required in a new `pages/_app.js` file.
export default function App({ Component, pageProps }) {
  return (
      <>
        <Header />
        <main id="page-content" className="d-flex flex-column justify-content-center align-items-center">
            <ReactBS.Container className="content">
              <Component {...pageProps} />
            </ReactBS.Container>
        </main>
        <ParticlesBg color="#FDB927" type="cobweb" bg={true} />
      </>
    )
}