import React from "react";
import "./style.css";

const Jumbotron = props => (
  <div className="header">

    <div className="title">{props.children}</div>
    <div className="scores">
      Score: {props.score} Highscore: {props.highScore}
    </div>
  </div>
);

export default Jumbotron;