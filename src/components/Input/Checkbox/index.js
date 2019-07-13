import React from "react";

import "./checkbox.scss";

const Checkbox = ({ type, value, label }) => {
  return (
    <label className="checkbox--container">
      {label}
      <input type="checkbox" checked={value} />
      <span className="checkmark" />
    </label>
  );
};

export default Checkbox;
