import React from "react";
import "./container.scss";

export default ({ title, body, footer }) => (
  <div className="container">
    {title && title}
    {body && <div className="container--body">{body}</div>}
    {footer && <div className="container--footer">{footer}</div>}
  </div>
);
