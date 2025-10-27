import React from 'react'
import './card.css'
const Card = ({title,image}) => {
  return (
    <div className='card'>
      <h1>{title}</h1>
      <div className="hovercard">
        <img src={image} alt=''/>
      </div>
    </div>
  )
}

export default Card
