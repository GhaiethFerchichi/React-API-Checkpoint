import React from "react";

import classes from "./Button.module.css";

function Button(props) {
  return (
    <button className={classes.Btn} onClick={props.click}>
      {props.value}
    </button>
  );
}

export default Button;
