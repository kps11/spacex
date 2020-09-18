import React from "react";
import "../style/App.css";

function Menu(props) {
  const { years, onClickYear } = props;
  return (
    <div className="menu-card">
      <div className="lunch-year">
        <div>
          <h4>Launch year</h4>
        </div>
        <div className="year-container">
          {years.map((year,id) => (
            <button
              key={id}
              onClick={() => onClickYear(year, "year")}
              className="button_style"
            >
              {year}
            </button>
          ))}
        </div>
      </div>
      <div className="sucessful-launch">
        <div>
          <h4>Sucessfull Lunch</h4>
        </div>
        <div className="year-container">
          <button
            onClick={() => onClickYear(true, "launch")}
            className="button_style"
          >
            true
          </button>
          <button
            onClick={() => onClickYear(false, "launch")}
            className="button_style"
          >
            false
          </button>
        </div>
      </div>
      <div className="sucessful-landing">
        <div>
          <h4>Sucessfull Landing</h4>
        </div>
        <div className="year-container">
          <button
            onClick={() => onClickYear(true, "landing")}
            className="button_style"
          >
            true
          </button>
          <button
            onClick={() => onClickYear(false, "landing")}
            className="button_style"
          >
            false
          </button>
        </div>
      </div>
    </div>
  );
}

export default Menu;
