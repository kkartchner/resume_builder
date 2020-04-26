import React from 'react';
import "./Section.css";

const section = (props) => {
    return (
        <div className="Section">
            <h1>{props.title}</h1>
            {props.children}
        </div>
    )
}

export default section;
