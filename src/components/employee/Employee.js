import React from "react";
import "./employee.css";

const Employee = ({ image, name, bio, position }) => {
  return (
    <div className="employee__container">
      <img src={image} alt="person" />
      <div className="employee__description">
        <h2 className="employee__name">{name}</h2>
        <h3 className="employee__position">{position}</h3>
        <p className="employee__bio">{bio}</p>
      </div>
    </div>
  );
};

export default Employee;
