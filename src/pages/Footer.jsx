import React from 'react'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="cont-footer container">
        <section className='footer-section'>
          <h3>Contact</h3>
          <address className='mb-2'>
            <p>0665 Broadway NY, New York 10001</p>
            <p>United States of America</p>
            <a href="tel:+12312345678">123 456 7890</a>

          </address>

          <a className='mt-2' href="mailto:nycbarbershop@gmail.com">nycbarbershop@gmail.com</a>
          
        </section>

        <section className='footer-section worktime'>
          <h3>Work Time</h3>
          <p>Monday <span>8:00 - 20:00</span></p>
          <p>Tuesday <span>8:00 - 20:00</span></p>
          <p>Wednesday <span>8:00 - 20:00</span></p>
          <p>Thursday <span>8:00 - 20:00</span></p>
          <p>Friday <span>8:00 - 20:00</span></p>
          <p>Saturday <span>8:00 - 20:00</span></p>
          <p>Sunday <span>Closed</span></p>
        </section>


        <section className='footer-section container'>
            <h3>Subscribe</h3>
            <p className='mb-4'>Subscribe to take advantage of our campaigns and gift certificates.</p>
            <form className='form-subscribe'>
                <input className='unset input' type="email" name="email" id="email" placeholder='Your email' />
                <input type="submit" value="Subscribe" />
               
            </form>
        </section>


      </div>
      
    </footer>
  )
}

export default Footer