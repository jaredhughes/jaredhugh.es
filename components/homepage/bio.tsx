import React from 'react'
import * as Coordinates from './../../lib/coordinates'

const LINKS = {
  frontpage: 'https://en.wikipedia.org/wiki/Microsoft_FrontPage',
  github: 'https://github.com/jaredhughes',
  instagram: 'https://www.instagram.com/jared_hughes/',
  linkedin: 'https://www.linkedin.com/in/-jared-hughes/',
  polarsteps: 'https://www.polarsteps.com/JaredHughes',
  ry: 'https://www.remoteyear.com',
  y2k: 'https://en.wikipedia.org/wiki/Year_2000_problem',
}

const link = (text: string, url: string) => (
  <a href={url} target='_blank'>
    {text}
  </a>
)

interface IProps {
  setCoords: React.Dispatch<any>
}

const onHometownClick = (
  setCoords: React.Dispatch<React.SetStateAction<Coordinates.ICoord>>,
) => (e: React.MouseEvent<any, any>) => {
  e.preventDefault()
  setCoords(Coordinates.coordinates.summerdale)
}

const Bio: React.SFC<IProps> = ({ setCoords }) => (
  <div className='section bio'>
    <h2>About</h2>
    <p>
      Hi! I&#39;m Jared, and I'm originally from a small town in Alabama called{' '}
      <a href='#' onClick={onHometownClick(setCoords)}>
        Summerdale, Alabama
      </a>
      . I've been building websites since {link('Y2K', LINKS.y2k)}, when I was
      given a copy of {link('Microsoft FrontPage 98', LINKS.frontpage)} and FTP
      access to a web directory hosted by my local ISP.
    </p>
    <p>
      I&#39;m currently taking a sabbatical to travel around the world with{' '}
      {link('Remote Year', LINKS.ry)}, living in a different country each month
      while studying various technologies that interest me.
    </p>
    <p>
      You can find me on {link('GitHub', LINKS.github)},{' '}
      {link('Instagram', LINKS.instagram)},{' '}
      {link('Polarsteps', LINKS.polarsteps)}, and{' '}
      {link('LinkedIn', LINKS.linkedin)}.
    </p>
  </div>
)

export default Bio
