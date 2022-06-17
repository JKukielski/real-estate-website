import React from 'react'
import './header.css'
import image from '../../assets/image-19.jpg'
import Navbar from '../../components/navbar/Navbar'



const Header = () => {
  return (
    <>
    <Navbar />
    <div className="app__header">
      <div className="app__header-image">
        
        <img src={image} alt="city" />
      </div>
      <div className="app__header-overlay"></div>
      <h1 className="app__header-heading"><span>FIND </span><span>YOUR</span><span> HOME</span></h1>
    </div>
    </>
  )
}

export default Header
