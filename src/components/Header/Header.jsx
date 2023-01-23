import React from 'react'
import './Header.css'
import logo from '../../Assets/images/logo.png'
import {Link} from 'react-scroll'

const Header = () => {
  return (
    <div className="header">
        <img src={logo} alt="" style={{height:'80px'}} />
        <ul className='header-menu'>
            <li><Link smooth={true} to='Home'>Home</Link></li>
            <li><Link smooth={true} to='Programs'>Programs</Link></li>
            <li><Link smooth={true} to='Plans'>Plans</Link></li>
            <li><Link smooth={true} to='Testimonials'>Testimonals</Link></li>
           
        </ul>
    </div>
  )
}

export default Header