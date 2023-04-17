import React from "react";
import "./form.scss";
const Form = () => {
  return (
    <div className="overlay">
    <div className="FormBase">
      <div className="input1">
        <h4> Enter Your Name </h4>
        <div className="Name">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
        </div>
      </div>
      <div className="input1">
        <h4> Enter Your Email </h4>
        <div className="Name">
          <input type="email" placeholder="...@gmail.com" />
        </div>
      </div>
    </div>
    </div>
  );
};

export default Form;
