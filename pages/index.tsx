import Bio from '@components/homepage/bio'
import Experience from '@components/homepage/experience'
import Skills from '@components/homepage/skills'
import React from 'react'
import BodyClassName from 'react-body-classname'
import * as MyApp from './_app'

interface IProps {
  updateCoords: MyApp.UpdateCoords
}

const HomePage: React.SFC<IProps> = ({ updateCoords }) => (
  <BodyClassName className='homepage'>
    <div className='container'>
      <Bio setCoords={updateCoords} />
      <Skills />
      <Experience />
    </div>
  </BodyClassName>
)

export default HomePage
