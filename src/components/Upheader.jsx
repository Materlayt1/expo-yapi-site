import React from 'react'
import { AiOutlineInstagram } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';
import Logo from "../assets/logo.jpg"

const Upheader = () => {
    return (
        <div className=' upheader text-white'>
            <div className="container d-flex justify-content-between align-items-center">
                <div className="number"><span>(0232) 332 14 75</span></div>
                <div className='work-time ms-4'>
                    <span className='me-3'>Pazartesi-Cumartesi : 07.00 - 19.00</span>
                    <span>Pazar : 10.00 - 15.00</span>
                </div>
                
            </div>
        </div>
    )
}

export default Upheader