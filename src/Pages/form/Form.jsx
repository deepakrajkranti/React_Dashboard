import React, { useState } from "react";
import "./form.scss";
import Roller from "./Roller";
import Layout from "./Layout";
import DasIcon from "./DasIcon";

const Form = () => {
  const options = ["Story", "Task", "Defect", "Bug"];
  const [myValue, setMyValue] = useState(options[0]);
  const option1 = ["week1", "week2", "week3", "week4"];
  const [myweek, setMyWeek] = useState(options[0]);
  const option2 = [1, 2, 3, 4, 5, 6, 7, 8];
  const [myhr, setMyhr] = useState(option2[0]);
  const option3 = ["In Progress", "Completed", "Blocked"];
  const [mystatus, setMystatus] = useState(option3[0]);
  // console.log(myValue);
  const [popup, setpopup] = useState(false);
  let work = false;
  if (myValue === "Task" || myValue === "Defect") {
    work = true;
  }
  // var popup=false;
  const [inputFields, setInputFields] = useState([
    {
      sprint: "",
      week: "",
      ParentTicket: "",
      Parent: "",
      Ticket: "",
      hour: "",
      status1: "",
      comment: "",
    },
  ]);
  const [data, setData] = useState([]);

  const handleChange = (event) => {
    setInputFields({
      ...inputFields,
      [event.target.name]: event.target.value,
    });
  };
  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log(inputFields);

    setpopup(false);

    const newtodos = [...data, inputFields];
    setData(newtodos);
    console.log(data);
  };
  return (
    <div className="container">
      <div className="navba">
        <div className="nav-left">
          <span>Daily Tracker</span>
        </div>
        <div className="nav-right">
          <span>Account</span>
        </div>
      </div>
      <div className="middle">
        <div className="left-part">
          <DasIcon />
        </div>
        <div className="right-part">
          <span
            className="popup"
            onClick={() => {
              setpopup(true);
              console.log(popup);
            }}
          >
            Add Task
          </span>

          <Roller
            data={data}
            inputFields={inputFields}
            option1={option1}
            options={options}
            option2={option2}
            option3={option3}
            onSubmitHandler={onSubmitHandler}
            handleChange={handleChange}
          />
          {popup && (
            /*       
        <div className="overlay1">
          <div className="FormBase">
            <form onSubmit={onSubmitHandler}>
              <div className="container1">
                <p>Enter Your Details</p>
              </div>
              <div className="container">
                <h4> sprint</h4>
                <input type="text" name="sprint" value={inputFields.sprint||''} 
onChange={handleChange}
                 required />
              </div>
              <div className="container">
                <h4>Choose a week:</h4>
                <select
                  name="week"         
                  value={inputFields.week}
                  onChange={handleChange}  
                >
                  {option1.map((option, idx) => (
                    <option key={idx}>{option}</option>
                  ))}
                </select>
              </div>
              <div className="container">
                <h4>Choose a Ticket Type:</h4>
                <select
                  name="ParentTicket"
                  value={inputFields.ParentTicket}
                  onChange={handleChange}
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
                    <input type="text"  name="Parent" value={inputFields.Parent ||''} onChange={handleChange}
 required />
                  </>
                )}
              </div>
              <div className="container">
                <h4> Ticket No.</h4>
                <input type="text" name="Ticket" value={inputFields.Ticket || ''} 
                onChange={handleChange} required />
              </div>
              <div className="container">
                <h4> Effort Hours.</h4>
                <select
                  name="hour"
                  value={inputFields.hour}      
                  onChange={handleChange}      
                >
                  {option2.map((option, idx) => (
                    <option key={idx}>{option}</option>
                  ))}
                </select>
              </div>
              <div className="container">
                <h4> Status</h4>
                <select
                  name="status1"
                  value={inputFields.status1}
                  onChange={handleChange}
                >
                  {option3.map((option, idx) => (
                    <option key={idx}>{option}</option>
                  ))}
                </select>
              </div>
              <div className="container">
                <h4>Comments</h4>
                <input type="text" name="comment" value={inputFields.comment||''} onChange={handleChange}
                     
                required />
              </div>
              <button type="submit">submit</button>
            </form>
          </div>

        </div>
        */
            <Layout
              inputFields={inputFields}
              option1={option1}
              options={options}
              option2={option2}
              option3={option3}
              onSubmitHandler={onSubmitHandler}
              handleChange={handleChange}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Form;
