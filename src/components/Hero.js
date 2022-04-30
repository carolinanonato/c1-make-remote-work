import React, { useState } from 'react'
import heroImage from '../assets/images/image-hero-desktop.png'
import Clients from './Clients'

function Hero() {
    const [buttonColor, setButtonColor] = useState("button1");


    return (

        <div div className="hero-container" >
            <div className="title">
                <h1 className="hero-title">Make remote work</h1>
                <p className="hero-paragraph">Get your team in sync, no matter your location. Streaming processes, create team rituals, and watch productivity soar.</p>

                <button
                    className={buttonColor}
                    onClick={() => setButtonColor((buttonColor) => (buttonColor === "button1" ? "button2" : "button1"))}
                >
                    Learn More
                </button>
                <Clients />
            </div>
            <div className='hero-image-section'>
                <img className="hero-image" src={heroImage} alt="" />
            </div>


        </div >


    )
}

export default Hero