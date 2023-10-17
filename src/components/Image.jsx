import React from 'react'


const Image = ({image}) => {
    const {name, url} = image;
  return (
    <img src={url} alt={name}/>
  )
}

export default Image