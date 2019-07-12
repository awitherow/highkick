import React from "react";
import { Link } from "react-router-dom";

import useGlobal from "../../store";

export default function({ updateGlobalState, history }) {
  const [globalState, globalActions] = useGlobal();

  return (
    <div className="view">
      <h1>Welcome</h1>
      <Link className="btn" to="/quiz" onClick={() => {}}>
        I'M READY!
      </Link>
    </div>
  );
}
