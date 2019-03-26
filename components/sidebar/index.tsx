import Link from 'next/link'
import * as React from 'react'

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

const REPO_URL = 'https://github.com/jaredhughes/jaredhugh.es'
const PHOTO_PATH = '/images/jared-hughes.jpg'

export const Sidebar = () => (
  <div className='sidebar'>
    <div className='top'>
      <p className='name'>Jared Hughes</p>
      <figure className='photo d-none d-md-block'>
        <img src={PHOTO_PATH} alt='Photo of Jared Hughes, Software Engineer' />
      </figure>
      <p className='title'>Web Applications Engineer</p>
    </div>

    {/* <hr />
    <nav className='nav'>
      {NAV_ITEMS.map(({ to, label }, key) => (
        <Link href={to} key={key}>
          <a>{label}</a>
        </Link>
      ))}
    </nav> */}

    <div className='footer d-none d-md-block'>
      <p className='copyright'>
        &copy; {new Date().getFullYear()} Jared Hughes
      </p>
      <p className='view-source'>
        Built using{' '}
        <a href='https://nextjs.org/' target='_blank'>
          Next.js
        </a>
        . <br />
        <a href={REPO_URL} target='_blank'>
          View source on GitHub
        </a>
      </p>
    </div>
  </div>
)

export default Sidebar
