import React from 'react'
import './sellingPoints.css'
import images from '../../constants/images'

const sellingPoints = () => {
  return (
    <div className="app__selling-points">
      <h1 className="app__selling-points_heading">The Best Choice For Your Home</h1>
      <div className="app__selling-points_feature">
        <img src={images.image7} alt="stairs" />
        <div className="app__selling-points_content">
          <h2 className="app__selling-points_content-heading">Luxurious properties</h2>
          <p className="app__selling-points_content-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore molestiae assumenda adipisci numquam ratione expedita! Nesciunt exercitationem animi, odit atque facilis amet, libero, tempore laudantium beatae voluptate repudiandae voluptatibus quae.</p>
        </div>
      </div>
      <div className="app__selling-points_feature">
        <img src={images.image6} alt="sofa" />
        <div className="app__selling-points_content">
          <h2 className="app__selling-points_content-heading">Excellent service</h2>
          <p className="app__selling-points_content-description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas corrupti consequuntur veniam deleniti delectus numquam mollitia facilis, impedit aspernatur amet soluta reprehenderit corporis velit praesentium maiores vero provident esse! Suscipit.</p>
        </div>
      </div>
      <div className="app__selling-points_feature">
        <img src={images.image16} alt="sofa" />
        <div className="app__selling-points_content">
          <h2 className="app__selling-points_content-heading">Wonderful locations</h2>
          <p className="app__selling-points_content-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem enim eius reiciendis vero, officia aliquam porro adipisci molestias animi velit amet ut voluptates laudantium illo libero culpa ipsa tempore labore.</p>
        </div>
      </div>
    </div>
  )
}

export default sellingPoints
