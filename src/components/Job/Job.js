import React from "react";
import "./Job.css";

const Job = (props) => {
  return (
    <div className="Job">
      <div className="dateDiv">
        <h2>
          {props.start_date} -<br /> {props.end_date}
        </h2>
      </div>
      <div className="infoDiv">
        <h1>{props.title}</h1>
        <h2>{props.company}</h2>
        <p>{props.children}</p>
      </div>
    </div>
  );
};

export default Job;
