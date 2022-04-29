import React from 'react'
import databiz from '../assets/images/client-databiz.svg'
import audiophile from '../assets/images/client-audiophile.svg'
import meet from '../assets/images/client-meet.svg'
import maker from '../assets/images/client-maker.svg'


function Clients() {
    return (
        <div className='clients-logo'>
            <img src={databiz} alt="" />
            <img src={audiophile} alt="" />
            <img src={meet} alt="" />
            <img src={maker} alt="" />

        </div>
    )
}

export default Clients