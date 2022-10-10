import {Link, NavLink} from 'react-router-dom'
import React from 'react'
import './Navbar.css'
import {links} from '../data'
import logo from './images/Group 3.png'
import { GiHamburgerMenu } from 'react-icons/gi';

function Navbar() {
  return (
   <>
    <nav>
      <div className='navbar'>
        <Link className='logo' to="/">
          <img  src={logo} alt="logo" />
        </Link>
            <ul className='nav-menu'>
              {
                links.map(({name, path}, index)=>{
                  return(
                    <li>
                      <NavLink to={path}>{name}</NavLink>
                    </li>
                  )
                })
              }
            </ul>
            <button className='cont'>Contact Us</button>
        </div>
        <button className='menu-btn'><GiHamburgerMenu/></button>
    </nav>
   </>
  )
}

export default Navbar