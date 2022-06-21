import React, { useState } from 'react'
import './propertyListing.css'
import { BsArrowRight, BsArrowLeft } from 'react-icons/bs'


const PropertyListing = ({ slides, price, address }) => {

  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }
  
  return (
    <div className="property__listing">
      <section className="property__listing-slider">
        <BsArrowLeft className='left-arrow' onClick={prevSlide}/>
        <BsArrowRight className='right-arrow' onClick={nextSlide}/>
        {slides.map((image, index) => {
          return (
            <div className={index === current ? 'slide active' : 'slide'} key={index}>
              {index === current && (
              <img src={image} alt="property" className="property__listing-image"/>
              )}
            </div>
          )
        })}
      </section>
      <div className="property__listing-details">      
        <h2 className="property__listing-price">{price}</h2>
        <div/>
        <p className="property__listing-address">{address}</p>
      </div>
      <div className="property__listing-details_link"><a href="#">View property</a></div>
    </div>
  )
}

export default PropertyListing
