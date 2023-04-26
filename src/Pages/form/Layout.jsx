import React from "react";
import './Layout.scss';
const Layout = ({
  inputFields,
  option1,
  options,
  option2,
  option3,
  onSubmitHandler,
  handleChange,
}) => {
  return (
    <div className="overlay1">
      <div className="FormBase">
        <form onSubmit={onSubmitHandler}>
          <div className="container1">
            <p>Enter Your Details</p>
          </div>
          <div className="container">
            <h4> sprint</h4>
            <input
              type="text"
              name="sprint"
              value={inputFields.sprint || ""}
              onChange={handleChange}
              required
            />
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
          {/* <div className="container">
            {work && (
              <>
                <h4> Parent Ticket No.</h4>
                <input
                  type="text"
                  name="Parent"
                  value={inputFields.Parent || ""}
                  onChange={handleChange}
                  required
                />
              </>
            )}
          </div> */}
          <div className="container">
            <h4> Ticket No.</h4>
            <input
              type="text"
              name="Ticket"
              value={inputFields.Ticket || ""}
              onChange={handleChange}
              required
            />
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
            <input
              type="text"
              name="comment"
              value={inputFields.comment || ""}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">submit</button>
        </form>
      </div>
    </div>
  );
};

export default Layout;
