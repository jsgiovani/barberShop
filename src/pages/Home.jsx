import React, { useState } from 'react'
import { services as serv } from '../data/services'
import Service from '../components/Service';
const Home = () => {

    const [services, setServices] = useState(serv);
  return (
    <main>

        <section className='section container'>


            <div className='barber'>
                <div className='bs-info'>

                    <h5 className='my-4'>SINCE 2000</h5>
                    <h1>NYC Barber Shop</h1>
                    <p>
                        Come experience a unique and edgy barbershop for all your hair and beard needs. ravida haretra nuam enim mi obortis eset uctus enec accumsan eu justo alisuame amet auctor orci donec vitae vehicula risus.
                    </p>

                    <p>
                        Barber utate ons amet ravida haretra nuam the duru miss uctus the drana accumsan justo aliquam sit amet auctor orci done vitae risus duise nisan sapien silver on the accumsan id mauris apien.
                    </p>

                    <ul className='list-services ml-4'>
                        <li>We're professional and certified barbers</li>
                        <li>We use quality products to make you look perfect</li>
                        <li>We care about our customers satisfaction</li>
                    </ul>
                </div>

                <div className="cont-imgs flex gap-2">
                    <img src="img/img1.jpg" alt="img info" />
                    <img src="img/img3.jpg" alt="img info" />
                </div>


            </div>



        </section>


        <section className='bg-secoundary cont-experience'>

            <div className='container section grid grid-cols-2 gap-2 align-center experience'>

                <div className='flex justify-end cont-img-exp'>
                    <img className='mr-4' src="img/img4.jpg" alt="img 2" />
                </div>


                <div className='info-experience'>
                  
                    <h5 className='mb-2'>17 Yeras of experience</h5>
                    <h2>Making people look awsome since 2006</h2>
                    <p>
                        Come experience a unique and edgy barbershop for all your hair and beard needs. Vulputate ons amet ravida haretra nuam the drana miss uctus enec accumsan justo aliquam sit amet auctor orci done vitae risus duise nunc sapien.
                    </p>
                </div>
            </div>
        </section>



        <section className='section container services'>

            <h2>Barber Services</h2>

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


        <section className='container pricing section'>
            <h2>Barber Pricing</h2>

            <ul className='prices grid grid-cols-2 gap-4'>
                {services.map(service => <Service key={service.id} service={service}/>)}
            </ul>


        </section>


    </main>
    )
}

export default Home