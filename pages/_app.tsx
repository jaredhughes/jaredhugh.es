import Footer from '@components/footer'
import Sidebar from '@components/sidebar'
import * as Coordinates from '@lib/coordinates'
import App, { AppProps, Container, DefaultAppIProps } from 'next/app'
import Head from 'next/head'
import React from 'react'
import Breakpoint, { BreakpointProvider } from 'react-socks'

import './../scss/app.scss'

const SHOW_MAP_FOR_PATHNAMES = ['/']

const MaybeRenderMap = ({ coords }: { coords: Coordinates.ICoord }) => {
  const isBrowser = (process as any).browser
  const pathname = isBrowser && window.location && window.location.pathname
  const showForRoute = SHOW_MAP_FOR_PATHNAMES.indexOf(pathname) != -1
  const render = isBrowser && showForRoute

  if (render) {
    const Map = require('@components/background_map/index').default

    return (
      <div className='background-map'>
        <Map coords={coords} />
      </div>
    )
  } else {
    return null
  }
}

interface IState {
  coords: Coordinates.ICoord
}

export type UpdateCoords = (coords: Coordinates.ICoord) => void

class MyApp extends App<DefaultAppIProps, IState> {
  public static async getInitialProps({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }
  constructor(props: DefaultAppIProps & AppProps) {
    super(props)
    this.state = {
      coords: Coordinates.current,
    }
  }

  public updateCoords = (coords): UpdateCoords => {
    this.setState({ coords })
    return
  }

  public render() {
    const { Component, pageProps } = this.props

    return (
      <BreakpointProvider>
        <Container>
          <Head>
            <title>
              Jared Hughes | Web Applications Architect &amp; Engineer
            </title>
            <meta
              name='description'
              content='Experienced software engineer with extensive history as lead and architect within agency and product teams'
            />
          </Head>

          <div className='layout'>
            <Sidebar />
            <div className='content'>
              <Component {...pageProps} updateCoords={this.updateCoords} />
              <Breakpoint small down>
                <Footer />
              </Breakpoint>
            </div>
          </div>

          <MaybeRenderMap coords={this.state.coords} />
        </Container>
      </BreakpointProvider>
    )
  }
}

export default MyApp
