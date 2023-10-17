import React from 'react'

const Barber = ({barber}) => {
    const {name, img} = barber;
  return (
  
    <li className='service barbers-container barber-white'>
        <img src={`img/${img}`} alt={`img ${name}`} />
        <div className="service-info barber-info bg-white">
            <h3>{name}</h3>
            <p>Barber</p>
        </div>
    </li>

   
  )
}

export default Barber