import React from 'react'
import { interests, skills } from './skills/lists'

const maybeLink = (label: string, url: string | undefined) =>
  !!url ? (
    <a href={url} target='_blank'>
      {label}
    </a>
  ) : (
    label
  )

const Skills: React.SFC<{}> = () => (
  <div className='section skills-interests'>
    <h2>
      <span>Skills &amp; Interests</span>
    </h2>

    <h4>Skills</h4>
    <ul className='tag-list'>
      {skills.map((skill, key) => (
        <li key={key}>{maybeLink(skill.label, skill.url)}</li>
      ))}
    </ul>

    <h4>Interests</h4>
    <ul className='tag-list'>
      {interests.map((interest, key) => (
        <li key={key}>{interest}</li>
      ))}
    </ul>
  </div>
)

export default Skills
