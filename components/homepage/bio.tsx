import * as Coordinates from '@lib/coordinates'
import React from 'react'
import * as MyApp from './../../pages/_app'

const LINKS = {
  frontpage: 'https://en.wikipedia.org/wiki/Microsoft_FrontPage',
  github: 'https://github.com/jaredhughes',
  instagram: 'https://www.instagram.com/jared_hughes/',
  linkedin: 'https://www.linkedin.com/in/-jared-hughes/',
  polarsteps: 'https://www.polarsteps.com/JaredHughes',
  ry: 'https://www.remoteyear.com',
  y2k: 'https://en.wikipedia.org/wiki/Year_2000_problem',
  mapbox: 'https://www.mapbox.com/',
}

const link = (text: string, url: string) => (
  <a href={url} target='_blank'>
    {text}
  </a>
)

interface IProps {
  updateCoords: MyApp.UpdateCoords
}

const Bio: React.SFC<IProps> = ({ updateCoords }) => (
  <div className='section bio'>
    <h2>
      <span>About</span>
    </h2>
    <p>
      Hi! I&#39;m Jared &mdash; originally from a small Southern town called{' '}
      <a
        href='#'
        onClick={e => {
          e.preventDefault()
          updateCoords(Coordinates.coordinates.summerdale)
        }}
      >
        Summerdale, Alabama
      </a>
      , I've been designing and building websites since {link('Y2K', LINKS.y2k)}
      , when I was given a copy of{' '}
      {link('Microsoft FrontPage 98', LINKS.frontpage)} and FTP access to a web
      directory hosted by my local ISP. More recently, I&#39;ve been working as
      a software engineer at startups in{' '}
      <a
        href='#'
        onClick={e => {
          e.preventDefault()
          updateCoords(Coordinates.coordinates.dc)
        }}
      >
        Washington, DC
      </a>
      .
    </p>
    <p>
      I&#39;m currently taking a sabbatical to travel around the world with{' '}
      {link('Remote Year', LINKS.ry)}, living in a different country each month
      while studying various technologies and doing a lot of scuba diving.
    </p>
    <p>I started building this site with three primary objectives for it:</p>
    <ol className='objectives'>
      <li>
        To explore server-side rendering using headless CMSs and Postgres with
        React, TypeScript, and Node.
        <br />{' '}
        <em>
          (Future blog post spoiler: stick to Elixir, Ruby, or Python for server
          languages.)
        </em>
      </li>
      <li>
        To begin documenting my experiences with software engineering and web
        application development, as well as travel recommendations.
        <br />{' '}
        <em>
          (Having been in 24 countries since January 2018, I owe it to folks.)
        </em>
      </li>
      <li>
        To make maps with {link('Mapbox', LINKS.mapbox)}. <br />{' '}
        <em>(I really like maps!)</em>
      </li>
    </ol>

    <p>
      You can find me on {link('GitHub', LINKS.github)},{' '}
      {link('Instagram', LINKS.instagram)},{' '}
      {link('Polarsteps', LINKS.polarsteps)}, and{' '}
      {link('LinkedIn', LINKS.linkedin)}.
    </p>
  </div>
)

export default Bio
