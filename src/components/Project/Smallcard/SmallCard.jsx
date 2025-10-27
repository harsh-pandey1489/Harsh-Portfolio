import React from 'react'
import './smallcard.css'
const SmallCard = ({title,link}) => {
  return (
    <>
      <div className='smallcard'>
        <h1>{title}</h1>
        <a className='live' href={link}>Live</a>
      </div>
    </>
  )
}

export default SmallCard
