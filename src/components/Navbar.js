import React from 'react'
import '../index.css'
import logo from '../assets/images/logo.svg'
import arrowDown from '../assets/images/icon-arrow-down.svg'

function Navbar() {
    return (
        <>

            <nav className='navbar'>
                <div className="left">
                    <img className="img-fix" src={logo} alt="" />


                    <ul className="nav-list">
                        <li className='nav-items'>Features</li>
                        <img className="img-fix" src={arrowDown} alt="" />
                        <li className='nav-items'>Company</li>
                        <img className="img-fix" src={arrowDown} alt="" />
                        <li className='nav-items'>Careers</li>
                        <li className='nav-items'>About</li>
                    </ul>
                </div>
                <div className="nav-right">
                    <ul className='nav-list right'>
                        <li className='nav-items'>Login</li>
                        <button className='nav-items nav-button'>Register</button>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar