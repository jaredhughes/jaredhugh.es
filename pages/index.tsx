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
      <div className='row'>
        <div className='col-12 col-lg-10 offset-lg-1'>
          <Bio updateCoords={updateCoords} />
          <Skills />
          <Experience />
        </div>
      </div>
    </div>
  </BodyClassName>
)

export default HomePage
