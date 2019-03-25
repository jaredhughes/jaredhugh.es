import React from 'react'
import App, { Container } from 'next/app'
import Sidebar from './../components/sidebar'
import Head from 'next/head'

import './../scss/app.scss'

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render() {
    const { Component, pageProps } = this.props

    return (
      <Container>
        <Head>
          <title>
            Jared Hughes | Web Applications Architect &amp; Engineer
          </title>
          <meta name="description" content="Experienced software engineer with extensive history as lead and architect within agency and product teams" />
        </Head>

        <div className='layout'>
          <Sidebar />
          <Component {...pageProps} />
        </div>
      </Container>
    )
  }
}

export default MyApp
