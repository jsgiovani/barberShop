import React, { useState } from 'react'
import { services as data } from '../data/services'
import Service2 from '../components/Service2';

const Services = () => {

    const [services, setServices] = useState(data);

  return (
    <main>


        <section className='container section'>

            <h2 className='mb-4'>Barber Services</h2>


            <ul className='grid gap-4 services-comp'>
                {services.map(service => <Service2 key={service.id} service = {service} />)}
            </ul>

        </section>



        <section className='bg-secoundary cont-experience mt-4'>

            
            <section className='section container services mt-4'>

                <ul className='services-container grid grid-cols-3 gap-4'>
                    <li className='service'>
                        <img src="img/service1.jpg" alt="service 1" />
                        <div className="service-info">
                            <h3>Cuts</h3>
                            <p>Cuts ut nisl quam nestibulum drana odio elementum sceisue the can golden varius the dis monte.</p>
                        </div>
                    </li>


                    <li className='service'>
                        <img src="img/service3.jpg" alt="service 1" />
                        <div className="service-info">
                            <h3>Hair Wash</h3>
                            <p>Fades ut nisl quam nestibulum drana odio elementum sceisue the can golden varius the dis monte.</p>
                        </div>
                    </li>


                    <li className='service'>
                        <img src="img/service2.jpg" alt="service 1" />
                        <div className="service-info">
                            <h3>Shaves</h3>
                            <p>Shaves ut nisl quam nestibulum drana odio elementum sceisue the can golden varius the dis monte.</p>
                        </div>
                    </li>

                </ul>

            </section>
           
        </section>





        <section className='section container'>


            <div className='barber'>


                <div className="cont-imgs flex gap-4">
                    <img src="img/x2.jpg" alt="img info" />
                    <img src="img/y.jpg" alt="img info" />
                </div>

                <div className="cont-imgs flex gap-4">
                    <img src="img/z.jpg" alt="img info" />
                    <img src="img/a.jpg" alt="img info" />
                </div>


            </div>



        </section>


        










    </main>
  )
}

export default Services