import React from 'react'

const Service2 = ({service}) => {
    const {title, description} = service;

  return (
    <li className='service-grid bg-white'>
        <h4 className='mb-3'>{title}</h4>
        <p>{description}</p>
    </li>
  )
}

export default Service2