import React from "react";
import "./style.css";

export function Quiz(props) {
  return (
    <React.Fragment>
      <div className="box-body">
        <div className="box box-red">
          <div className="inner-box"></div>
        </div>
        <div className="box box-blue">
          <div className="inner-box"></div>
        </div>
      </div>
      <div className="inner-box">hello</div>
      <h1>Quiz</h1>

      <div>
        <h5>Question 1</h5>
        <div>
          <p>What is your name</p>
        </div>
      </div>
    </React.Fragment>
  );
}

export function MultipleChoices(props) {
  return <React.Fragment></React.Fragment>;
}
