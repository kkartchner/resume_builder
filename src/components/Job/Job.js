import React from "react";
import "./Job.css";

const Job = (props) => {
  return (
    <div className="Job">
      <table>
        <tr>
          <td>
            <h2>{props.start_date} -<br/> {props.end_date}</h2>
          </td>
          <td>
            <h1>{props.title}</h1>
            <h2>{props.company}</h2>
            <p>{props.children}</p>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default Job;
