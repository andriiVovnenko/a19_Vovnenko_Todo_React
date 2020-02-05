import React from "react";
import "./weeks.css"
const Weeks = ({changeDay, dayToShow}) => {

    const days = [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday'
    ];

  return (
    <ul className="list-group" onClick={(e) => changeDay(e.target.value)}>
        {days.map((day, i) => <li className={`list-group-item ${dayToShow===i?"active itemsWeeks" : ""}`} value={i} key={i}>{day}</li>)}
    </ul>
  )
};

export default Weeks;