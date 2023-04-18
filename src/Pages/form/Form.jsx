import React, { useState } from "react";
import "./form.scss";
const Form = () => {
  const options = ["Story", "Task", "Defect", "Bug"];
  const [myValue, setMyValue] = useState(options[0]);
  const option1 = ["week1", "week2", "week3", "week4"];
  const [myweek, setMyWeek] = useState(options[0]);
  const option2 = [1, 2, 3, 4, 5, 6, 7, 8];
  const [myhr, setMyhr] = useState(options[0]);
  const option3 = ["In Progress", "Completed", "Blocked"];
  const [mystatus, setMystatus] = useState(options[0]);
  // console.log(myValue);
  let work = false;
  if (myValue === "Task" || myValue === "Defect") {
    work = true;
  }

  return (
    <div className="overlay">
      <div className="FormBase">
        <div className="container">
          <p>Enter Your Details</p>
        </div>
        <div className="container">
          <h4> sprint</h4>
          <input type="text" required />
        </div>
        <div className="container">
          <h4>Choose a car:</h4>
          <select
            onChange={(e) => setMyWeek(e.target.value)}
            defaultValue={myweek}
          >
            {option1.map((option, idx) => (
              <option key={idx}>{option}</option>
            ))}
          </select>
        </div>
        <div className="container">
          <h4>Choose a Ticket Type:</h4>
          <select
            onChange={(e) => setMyValue(e.target.value)}
            defaultValue={myValue}
          >
            {options.map((option, idx) => (
              <option key={idx}>{option}</option>
            ))}
          </select>
        </div>
        <div className="container">
          {work && (
            <>
              <h4> Parent Ticket No.</h4>
              <input type="text" required />
            </>
          )}
        </div>
        <div className="container">
          <h4> Ticket No.</h4>
          <input type="text" required />
        </div>
        <div className="container">
          <h4> Effort Hours.</h4>
          <select onChange={(e) => setMyhr(e.target.value)} defaultValue={myhr}>
            {option2.map((option, idx) => (
              <option key={idx}>{option}</option>
            ))}
          </select>
        </div>
        <div className="container">
          <h4> Status</h4>
          <select
            onChange={(e) => setMystatus(e.target.value)}
            defaultValue={mystatus}
          >
            {option3.map((option, idx) => (
              <option key={idx}>{option}</option>
            ))}
          </select>
        </div>
        <div className="container">
          <h4>Comments</h4>
          <input type="text" required />
        </div>
      </div>
    </div>
  );
};

export default Form;
