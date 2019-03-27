import classnames from 'classnames'
import React from 'react'

interface Position {
  company: string
  website?: string
  title: string
  startDate: string
  endDate: string
  location: string
}

const WORK_HISTORY: Position[] = [
  {
    company: 'Legends of Learning',
    website: 'https://www.legendsoflearning.com',
    title: 'Senior Software Engineer',
    startDate: 'Oct 2016',
    endDate: 'Mar 2019',
    location: 'Washington, DC',
  },
  {
    company: 'Contactually',
    website: 'https://www.contactually.com',
    title: 'Senior Frontend Engineer',
    startDate: 'Feb 2016',
    endDate: 'Oct 2016',
    location: 'Washington, DC',
  },
  {
    company: 'Blue State Digital',
    website: 'https://www.bluestatedigital.com',
    title: 'Senior Web Developer',
    startDate: 'Dec 2013',
    endDate: 'Feb 2016',
    location: 'Washington, DC',
  },
  {
    company: 'Big Communications',
    website: 'https://www.bigcom.com',
    title: 'Interactive Developer',
    startDate: 'Feb 2013',
    endDate: 'Dec 2013',
    location: 'Birmingham, AL',
  },
  {
    company: 'Anchor Innovative',
    title: 'Web Developer',
    startDate: 'Apr 2010',
    endDate: 'Feb 2013',
    location: 'Birmingham, AL',
  },
  {
    company: 'Bent Media Company',
    title: 'Web Developer',
    startDate: 'May 2008',
    endDate: 'Apr 2010',
    location: 'Birmingham, AL',
  },
]

const Experience: React.SFC<{}> = () => (
  <div className='section experience'>
    <h2>Experience</h2>
    <ol className='work-history'>
      {WORK_HISTORY.map((job, index) => (
        <li
          className={classnames('cv-item', {
            [`item-${index}`]: true,
            even: index % 2 != 0,
            odd: index % 2 == 0,
          })}
          key={index}
          itemScope
          itemType='http://schema.org/Event/Job'
        >
          <div itemScope itemType='http://schema.org/Organization'>
            <p className='company' itemProp='name'>
              {job.website ? (
                <a href={job.website} itemProp='url' target='_blank'>
                  {job.company}
                </a>
              ) : (
                <>{job.company}</>
              )}
            </p>
            <p className='title' itemProp='name'>
              {job.title}
            </p>
            <p
              itemProp='address'
              itemScope
              itemType='http://schema.org/PostalAddress'
            >
              <span className='location' itemProp='addressLocality'>
                {job.location}
              </span>
            </p>
          </div>
          <p className='dates'>
            <span itemProp='startDate'>{job.startDate}</span> -{' '}
            <span itemProp='endDate'>{job.endDate}</span>
          </p>
        </li>
      ))}
    </ol>
  </div>
)

export default Experience
