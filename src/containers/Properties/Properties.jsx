import React from 'react'
import './properties.css'
import PropertyListing from '../../components/propertyListing/propertyListing'
import images from '../../constants/images' 
const sliderImages = [images.image11, images.image12, images.image14];
const sliderImagesTwo = [images.image15, images.image5];
const sliderImagesThree = [images.image21, images.image23, images.image24];
const sliderImagesFour = [images.image30, images.image26, images.image27];
const sliderImagesFive = [images.image17, images.image23, images.image29];
const sliderImagesSix = [images.image9, images.image28, images.image24];


const Properties = () => {
  return (
    <div className="app__featured-properties">
    <h1 className="app__featured-properties_heading">Our Featured Properties</h1>
    <div className="app__featured-properties__listings">
      <PropertyListing slides={sliderImages} price='$5,500,000' address='9482 North Studebaker Ave. Miami, FL 33173'/>
      <PropertyListing slides={sliderImagesTwo} price='$2,300,000' address='15 East Center Lane Miami, FL 33147'/>
      <PropertyListing slides={sliderImagesThree} price='$2,500,000' address='492 2nd St.Tampa, FL 33604'/>
      <PropertyListing slides={sliderImagesFour} price='$4,200,000' address='556 Jones Street Miami, FL 33183'/>
      <PropertyListing slides={sliderImagesFive} price='$7,699,999' address='7118 Wild Horse Dr.Homestead, FL 33033'/>  
      <PropertyListing slides={sliderImagesSix} price='$1,499,999' address='248 Marsh Circle Lake Worth, FL 33461'/>
    </div>
    </div>
  )
}

export default Properties
