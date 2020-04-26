import React from "react";
import Job from "./components/Job/Job";
import Section from "./components/Section/Section";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Section title="Work Experience">
        <Job
          title="Janitor"
          company="CoolCompany"
          start_date="2019/07"
          end_date="present"
        >
          <ul>
            <li>Did lots of great things</li>
            <li>Met some good people</li>
          </ul>
        </Job>
        <Job
          title="Dishwasher"
          company="Assisted Living"
          start_date="2019/07"
          end_date="present"
        ></Job>
        <Job
          title="Grounds Keeper"
          company="Assisted Living"
          start_date="2019/07"
          end_date="present"
        ></Job>
      </Section>
    </div>
  );
}

export default App;
