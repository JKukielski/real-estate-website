import React from 'react'
import './sellingPoints.css'
import images from '../../constants/images'

const sellingPoints = () => {
  return (
    <div className="app__selling-points">
      <h1 className="app__selling-points_heading">The Best Choice For Your Home</h1>
      <div className="app__selling-points_feature">
        <img src={images.image7} alt="abc" />
        <div className="app__selling-points_content">
          <h2 className="app__selling-points_content-heading">Luxurious properties</h2>
          <div className='content-split'/>
          <p className="app__selling-points_content-description">Our agency offers only the most luxurious properties available in the state</p>
        </div>
      </div>
      <div className="app__selling-points_feature">
        <img src={images.image6} alt="abc" />
        <div className="app__selling-points_content">
          <h2 className="app__selling-points_content-heading">Luxurious properties</h2>
          <div className='content-split'/>
          <p className="app__selling-points_content-description">Our agency offers only the most luxurious properties available in the state</p>
        </div>
      </div>
      <div className="app__selling-points_feature">
        <img src={images.image16} alt="abc" />
        <div className="app__selling-points_content">
          <h2 className="app__selling-points_content-heading">Luxurious properties</h2>
          <div className='content-split'/>
          <p className="app__selling-points_content-description">Our agency offers only the most luxurious properties available in the state</p>
        </div>
      </div>
    </div>
  )
}

export default sellingPoints
