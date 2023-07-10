import React, { useState } from 'react'
import Logo from "../assets/logo.jpg"
import { AiOutlineInstagram } from 'react-icons/ai';
import { AiFillFacebook } from 'react-icons/ai';
import { FaBars } from 'react-icons/fa';




const Header = () => {

  const [active,setActive] =useState(false)

  const barActive =()=>{
    setActive(!active)
  }
 


  return (
    <div className='header'>
      <div className="container header-container">
        <div className="logo"><img src={Logo} alt="" /></div>

        <div className="nave ">
          <ul className={active ? ' active nav ' : "naver nav"}>
            <li className='nav-item px-3'><a href="/" className='nav-link'>Anasayfa</a></li>
            <li className='nav-item px-3'><a href="/hakkimizda" className='nav-link'>Hakkımızda</a></li>
            <li className='nav-item px-3 nav-link proje' > Projelerimiz
            <ul className="navbarr ">
            <li className='nav-item'><a href="/kusadasi-vilaları-proje" className='nav-link'>Kuşadası Villaları</a></li>
            <li className='nav-item'><a href="/cesme-vilaları-proje" className='nav-link'>Çeşme Villaları</a></li>
          </ul>
              </li>
            <li className='nav-item px-3'><a href="/Basinda-biz" className='nav-link'>Basında Biz</a></li>

          </ul>
        </div>
        <div className={active ? 'active   ' : "social-media"}>
          
          <span><a href="https://www.instagram.com/expoyapi/" target='_blank' className='ms-2 mb-2 social text-danger'><AiOutlineInstagram /></a></span>
          <span><a href="https://www.facebook.com/expoyapi/" target='_blank' className='ms-2 social text-primary' ><AiFillFacebook /></a></span>
        </div>

      </div>
       
       <FaBars className='bar' onClick={()=> barActive()}/>

    </div>
  )
}

export default Header