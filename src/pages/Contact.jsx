import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLocationDot, faMobileScreenButton } from '@fortawesome/free-solid-svg-icons'

const Contact = () => {
  return (
    <main>

      <section className='section container contact'>
        <div className="info-contact">
            <h3 className='my-4'>Get in touch</h3>
            <p className='my-4'>Barber utate ons amet ravida haretra nuam the duru miss uctus the drana accumsan justo aliquam sit amet auctor orci done vitae.</p>
            <ul className='contact-methods'>

                <li className='flex align-center gap-2 mb-4'>
                    <FontAwesomeIcon className='icon flex align-center justify-center rounded-full p-4' icon={faLocationDot} />
                    <div className='method'>
                        <h4>Address</h4>
                        <address>0665 Broadway NY, 10001 USA</address>
                    </div>
                </li>


                <li className='flex align-center gap-2 mb-4'>
                    <FontAwesomeIcon className='icon flex align-center justify-center rounded-full p-4' icon={faMobileScreenButton} />
                    <div className='method'>
                        <h4>Phone</h4>
                        <a href="tel:+855 100 4444">855 100 4444</a>

                    </div>
                </li>

                <li className='flex align-center gap-2 mb-4'>
                    <FontAwesomeIcon className='icon flex align-center justify-center rounded-full p-4' icon={faEnvelope} />
                    <div className='method'>
                        <h4>e-Mail</h4>
                        <a href="mailto:info@nycbarbershop.com">info@nycbarbershop.com</a>
                    </div>
                </li>

                

            </ul>
        </div>

        <form className='form-contact' action="">
            <h3 className='text-center text-white mb-4'>Contact Form</h3>
            <div className="input-container">

                <div className="cont-item flex gap-2">
                    <input className='input-item unset' type="text" placeholder='Name'  />
                    <input className='input-item unset' type="tel" placeholder='Phone' />

                </div>

                <div className="cont-item flex gap-2">
                    <input className='input-item unset' type="email" name="email" id="email" placeholder='Email' />
                    <input className='input-item unset' type="text" name="subject" id="subject" placeholder='Subject' />
                </div>
                
                <textarea className='input-item unset' rows='5' placeholder='Message'>
    

                </textarea>

                <input className='input-item unset btn-submit' type="submit" value="Send Message" />
            </div>
           
        </form>


      </section>


      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1841337505953!2d-73.98811752263063!3d40.7579746713868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1696259024212!5m2!1sen!2sus" width="100%" height="450" loading="lazy"></iframe>
      
    </main>
  )
}

export default Contact