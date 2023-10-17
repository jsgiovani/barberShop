import React, { useState } from 'react'
import { services as data } from '../data/services'
import Service from '../components/Service';

const Pricing = () => {
    const [prices, setPrices] = useState(data);

    const index1 = prices.filter(item => {
        if (item.id<=3) {
            return item
        }
    });
    
    const index2 = prices.filter(item => {
        if (item.id > 3 & item.id<=6) {
            return item
        }
    });


    const index3 = prices.filter(item => {
        if (item.id > 6) {
            return item
        }
    });


    

  return (
    <main>
      <section className='section container'>
        <div className="prices prices-section">
            <ul className='grid lign-center grid-cols-cont'>
                <img src="img/service4.jpg" alt="img" />
                <ul className='prices'>
                    {index1.map(service => <Service key={service.id} service={service} limit = {2}  />)}
                </ul>
            </ul>

            <ul className='grid lign-center grid-cols-cont'>
                <ul className='prices'>
                    {index2.map(service => <Service key={service.id} service={service} limit = {2}  />)}
                </ul>
                <img src="img/service5.jpg" alt="img" />
            </ul>


            <ul className='grid lign-center grid-cols-cont'>
                <img src="img/service6.jpg" alt="img" />
                <ul className='prices'>
                    {index3.map(service => <Service key={service.id} service={service} limit = {2}  />)}
                </ul>
            </ul>


        </div>
        

      </section>
    </main>
  )
}

export default Pricing