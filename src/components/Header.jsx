import { Link, useLocation} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const Header = () => {

    const [navHidden, setnavHidden] = useState(true);

    const location = useLocation();

    let url = location.pathname.split('/')[1];

    //is current url empty, if so, current url is equals to 'hom?
    url = url !=='' ? url: 'home'

   
    
    function active(page) {
        if (page === url) {
            return 'active'
        }else{
            return null
        }
    }

  return (

    <>
        <header className='flex  align-center  justify-between header container'>
            <Link  onClick={()=>{setnavHidden(true)}}  to="/">
                <h1 className='logo text-white'>Barber<span>Shop</span></h1>
            </Link>


            <button 
                className='unset btn-navbar cursor-pointer'
                onClick={()=>{setnavHidden(!navHidden)}}

                >
                <FontAwesomeIcon className='icon-navbar text-white' icon={faBars} />
            </button>

            <nav className={`flex gap-3 nav nav-mobile ${navHidden?'hidden':''}`}>
                <Link  onClick={()=>{setnavHidden(!navHidden)}} className={active('home')} to="/">Home</Link>
                <Link  onClick={()=>{setnavHidden(!navHidden)}} className={active('about')} to="/about">About</Link>
                <Link  onClick={()=>{setnavHidden(!navHidden)}} className={active('services')} to="/services">Services</Link>
                <Link  onClick={()=>{setnavHidden(!navHidden)}} className={active('pricing')} to="/pricing">Pricing</Link>
                <Link  onClick={()=>{setnavHidden(!navHidden)}} className={active('portafolio')} to="/portafolio">Portafolio</Link>
                <Link  onClick={()=>{setnavHidden(!navHidden)}} className={active('contact')} to="/contact">Contact</Link>
            </nav>
            
            <nav className={`flex gap-3 nav nav-desktop`}>
                <Link className={active('home')} to="/">Home</Link>
                <Link className={active('about')} to="/about">About</Link>
                <Link className={active('services')} to="/services">Services</Link>
                <Link className={active('pricing')} to="/pricing">Pricing</Link>
                <Link className={active('portafolio')} to="/portafolio">Portafolio</Link>
                <Link className={active('contact')} to="/contact">Contact</Link>
            </nav>

        </header>

        <div className={`bg-${url}`}>
        </div>

    </>
  )
}

export default Header