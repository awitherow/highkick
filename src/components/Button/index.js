import React from "react";
import { Link } from "react-router-dom";

import "./button.scss";

export default ({ type, className = null, text, f = null, route, history }) =>
  type === "link" ? (
    <Link
      className={`btn${className ? " " + className : ""}`}
      to={route}
      onClick={() => {
        history.push(route);
        f();
      }}>
      {text}
    </Link>
  ) : (
    <button className={`btn${className ? " " + className : ""}`} onClick={f}>
      {text}
    </button>
  );
