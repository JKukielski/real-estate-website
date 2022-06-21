import React from 'react'
import './header.css'
import images from '../../constants/images'

const Header = () => {
  return (
    <>
    
    <div className="app__header">
      <div className="app__header-image">
        
        <img src={images.image20} alt="city" />
      </div>
      <div className="app__header-overlay"></div>
      <h1 className="app__header-heading"><span>FIND </span><span>YOUR</span><span> HOME</span></h1>
    </div>
    </>
  )
}

export default Header
