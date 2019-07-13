import React from "react";

import Checkbox from "./Checkbox/index";

const Input = ({ type, label, value, ...props }) => {
  if (type === "checkbox") {
    return <Checkbox label={label} value={value} />;
  } else {
    return (
      <label className="input--container">
        {label}
        <input type={type} value={value} />
      </label>
    );
  }
};

export default Input;
