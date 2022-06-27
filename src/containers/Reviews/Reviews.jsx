import React from 'react'
import './reviews.css'
import { FaQuoteRight } from 'react-icons/fa'

const Reviews = () => {
  return (
    <div className="app__reviews-section">
      <h1 className="app__reviews-heading">Valued By Our Customers</h1>
      <div className="app__reviews">
      <div className="app__review-container">
        <FaQuoteRight fontSize={72} color="var(--color-cream)"/>
        <p className="app__review-content">All properties that were shown to me by J&K Properties were wonderful. In the end the toughest part was the decision on which house to choose but everything was simply a pleasure. I would recommend J&K Properites to everyone.</p>
        <p className="app__review-name">Andrew B.</p>
      </div>
      <div className="app__review-container">
        <FaQuoteRight fontSize={72} color="var(--color-cream)"/>
        <p className="app__review-content">The entire process was fantastic from start to finish. I never thought that buying a house could be so carefree and smooth.</p>
        <p className="app__review-name">Micheal S.</p>
      </div>
      <div className="app__review-container">
        <FaQuoteRight fontSize={72} color="var(--color-cream)"/>
        <p className="app__review-content">I received excellent service from J&K Properties! Whenever I needed some information or had some doubts, I was always able to reach out to someone from the agency for help.</p>
        <p className="app__review-name">Ellie H.</p>
      </div>
      </div>
    </div>
  )
}

export default Reviews
