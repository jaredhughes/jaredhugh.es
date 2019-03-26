import Link from 'next/link'
import * as React from 'react'
import Breakpoint from 'react-socks'
import Footer from './../footer'

const NAV_ITEMS = [
  {
    to: '/',
    label: 'Home',
  },
  {
    to: '/travels',
    label: 'Travels',
  },
  {
    to: '/blog',
    label: 'Blog',
  },
  {
    to: '/portfolio',
    label: 'Portfolio',
  },
  {
    to: '/contact',
    label: 'Contact',
  },
]

const PHOTO_PATH = '/images/jared-hughes.jpg'

export const Sidebar = () => (
  <div className='sidebar'>
    <div className='top'>
      <p className='name'>Jared Hughes</p>
      <figure className='photo d-none d-md-block'>
        <img src={PHOTO_PATH} alt='Photo of Jared Hughes, Software Engineer' />
      </figure>
      <p className='title'>
        Web Applications Architect
        <br /> &amp; Software Engineer
      </p>
    </div>

    {/* <hr />
    <nav className='nav'>
      {NAV_ITEMS.map(({ to, label }, key) => (
        <Link href={to} key={key}>
          <a>{label}</a>
        </Link>
      ))}
    </nav> */}

    <Breakpoint medium up>
      <Footer />
    </Breakpoint>
  </div>
)

export default Sidebar
