import React, { useState } from 'react'
import '../index.css'
import logo from '../assets/images/logo.svg'
import arrowDown from '../assets/images/icon-arrow-down.svg'

import Features from './Features'
import BasicMenu from './Features'
import BasicMenu2 from './Company'

function Navbar() {



    return (
        <>

            <nav className='navbar'>
                <div className="nav-left">
                    <img src={logo} alt="" />
                    <BasicMenu />
                    <img className="arrow" src={arrowDown} alt="" />
                    <BasicMenu2 />
                    <img className="arrow" src={arrowDown} alt="" />
                    <li className='nav-item'>Careers</li>
                    <li>   About</li>

                </div>
                <div className="nav-right">

                    <li className='nav-item'>Login</li>
                    <button className='nav-register'>Register</button>

                </div>

            </nav >



        </>
    )
}

export default Navbar