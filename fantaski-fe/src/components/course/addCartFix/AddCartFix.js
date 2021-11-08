import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import Calendar from "../calendar/Calendar";

function AddCartFix({ customerChoose, setCustomerChoose }) {
  const [showCalendar, setShowCalendar] = useState(false);

  function handleChange(e) {
    let name = e.target.name;
    let newValue = e.target.value;
    setCustomerChoose((cur) => {
      return { ...cur, [name]: newValue };
    });
  }
  return (
    <>
      <div className="add-cart-fix-wrapper">
        <div className="decoration-skill">
          <img
            className="object-fit"
            src="/assets/img_course/skillPeople.png"
            alt=""
          />
        </div>
        <div className="row text-center content">
          <div className="col-2"></div>
          <div className="col-2 day-choose-box">
            <h5>請選擇日期</h5>
            <input
              type="text"
              name="date"
              value={customerChoose.date}
              placeholder="選擇日期"
              className="date pl-4"
              onChange={handleChange}
            ></input>
            <FontAwesomeIcon
              className="icons"
              icon={faCalendarAlt}
              onClick={() => {
                setShowCalendar(!showCalendar);
              }}
            />
            {showCalendar && (
              <div className="custom-calendar">
                <Calendar
                  setCustomerChoose={setCustomerChoose}
                  setShowCalendar={setShowCalendar}
                />
              </div>
            )}
          </div>
          <div className="col-2 number-choose-box">
            <h5>報名人數</h5>
            <input
              type="number"
              name="number"
              value={customerChoose.number}
              placeholder="1"
              min="1"
              className="number"
              onChange={handleChange}
            ></input>
          </div>
          <div className="col-2">
            <h5>價格</h5>
            <h4>$3000</h4>
          </div>
          <div className="col-2">
            <button>立即報名</button>
          </div>
          <div className="col-2"></div>
        </div>
      </div>
    </>
  );
}

export default AddCartFix;