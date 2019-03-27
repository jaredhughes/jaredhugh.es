import React from 'react'
const REPO_URL = 'https://github.com/jaredhughes/jaredhugh.es'

const Footer: React.SFC<{}> = () => (
  <footer className='footer'>
    <p className='copyright'>&copy; {new Date().getFullYear()} Jared Hughes</p>
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
  </footer>
)

export default Footer
