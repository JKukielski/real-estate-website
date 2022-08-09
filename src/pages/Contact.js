import React from "react";
import images from "../constants/images";
import "./contact.css";
import { BsEnvelopeOpen } from "react-icons/bs";

const Contact = () => {
  return (
    <div className="app__contact">
      <div className="app__contact-image">
        <img src={images.image19} alt="city" />
      </div>
      <div className="app__contact-content">
        <h1 className="app__contact-heading">Contact Us</h1>
        <div className="app__contact-form_container">
          <form className="app__contact-form" onSubmit={() => {}}>
            <div className="app__contact-form_element">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" placeholder="Enter your name..." />
            </div>
            <div className="app__contact-form_element">
              <label htmlFor="email">Email address:</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your e-mail..."
              />
            </div>
            <div className="app__contact-form_element">
              <label htmlFor="message">Message:</label>
              <input
                type="textarea"
                id="message"
                placeholder="What is your message?"
              />
            </div>
          </form>
          <div className="app__contact-form_description">
            <BsEnvelopeOpen color="#000" fontSize={124} />
            <p className="app__contact-form_description-info">
              Feel free to reach out to using the provided and contact form and
              we will get back to you within 2 days.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
