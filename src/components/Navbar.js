import React from 'react'
import '../index.css'
import logo from '../assets/images/logo.svg'


function Navbar() {
    return (
        <nav className='navbar'>
            <img src={logo} alt="" />
            <div className="left">


                <ul className="nav-list">
                    <li>Features</li>
                    <li>Company</li>
                    <li>Carrers</li>
                    <li>About</li>
                </ul>
            </div>
            <div className="right">
                <ul className='nav-list right'>
                    <li>Login</li>
                    <button>Register</button>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar