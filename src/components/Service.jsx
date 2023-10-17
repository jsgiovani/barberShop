import React from 'react'

const Service = ({service, limit}) => {
    const {id, title, price, description} = service;
  return (
   <li className='price price-sparce mb-4'>
        <div className="price-cont flex align-center justify-between">
            <h3>{title}</h3>
            <p>${price}</p>
        </div>

        <small>{description}</small>

   </li>
  )
}

export default Service