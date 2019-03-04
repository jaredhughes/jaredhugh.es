import * as React from 'react'
import Link from 'next/link'

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

export const Sidebar = () => (
  <div className='sidebar'>
    <p className='name'>Jared Hughes</p>
    <p className='title'>
      Software Engineer,
      <br /> Music Aficionado,
      <br /> &amp; Travel Enthusiast
    </p>

    {/* <hr />

    <nav className='nav'>
      {NAV_ITEMS.map(({ to, label }, key) => (
        <Link href={to} key={key}>
          <a>{label}</a>
        </Link>
      ))}
    </nav> */}
  </div>
)

export default Sidebar
