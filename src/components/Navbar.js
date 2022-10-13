import {Link, NavLink} from 'react-router-dom'
import { useState } from 'react'
import React from 'react'
import './Navbar.css'
import {links} from '../data'
import logo from './images/Group 3.png'
import { RiMenu4Fill } from 'react-icons/ri';

function Navbar() {

  const [toggle, setToggle] = useState(false)
   
  



  return (
   <>
    <nav>
      <div className='navbar'>
        <Link className='logo' to="/">
          <img  src={logo} alt="logo" />
        </Link>
            <ul className={`nav-menu ${toggle ? "show-nav" : "hide-nav"}`}>
              {
                links.map(({name, path}, index)=>{
                  return(
                    <li key={index}>
                      <NavLink to={path}>{name}</NavLink>
                    </li>
                  )
                })
              }
            </ul>
            <button className='cont'>Contact Us</button>
        </div>
        <button onClick={()=>{setToggle(!toggle)}} className='menu-btn'><RiMenu4Fill/></button>
    </nav>
   </>
  )

 }
export default Navbar