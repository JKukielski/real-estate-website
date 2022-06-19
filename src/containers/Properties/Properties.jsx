import React from 'react'
import './properties.css'
import PropertyListing from '../../components/propertyListing/propertyListing'
import images from '../../constants/images' 
const sliderImages = [images.image11, images.image12, images.image14];
const sliderImagesTwo = [images.image15, images.image5];


const Properties = () => {
  return (
    <div className="app__featured-properties">
    <h1 className="app__featured-properties_heading">Our Featured Properties</h1>
    <div className="app__featured-properties__listings">
      <PropertyListing slides={sliderImages} price='$5,500,000' address='9482 North Studebaker Ave. Miami, FL 33173'/>
      <PropertyListing slides={sliderImagesTwo} price='$2,300,000' address='15 East Center Lane Miami, FL 33147'/>
      <PropertyListing slides={sliderImages} price='' address=''/>
      <PropertyListing slides={sliderImages} price='' address=''/>
      <PropertyListing slides={sliderImages} price='' address=''/>
      <PropertyListing slides={sliderImages} price='' address=''/>
    </div>
    </div>
  )
}

export default Properties
