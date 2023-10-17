import React, { useState } from 'react'
import { images as data } from '../data/images'
import Image from '../components/Image';

const Portafolio = () => {
  const [images, setimages] = useState(data);
  return (
    <main>
      <section className='section container'>
        <h2 className='mb-4'>Image Gallery</h2>

        <div className="gallery grid gap-4">
            {images.map(image => <Image key={image.id} image={image}/>)}
        </div>


      </section>
      
    </main>
  )
}

export default Portafolio