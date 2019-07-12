import React, { useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import useGlobal from "./store";

import Home from "./views/Home";

import "./App.css";

const App = () => {
  const [globalState, globalActions] = useGlobal();

  let VIEW_ROUTE = null;
  if (globalState.status === "LOADING") {
    VIEW_ROUTE = ""; // TODO: loading
  } else if (globalState === "ERROR") {
    VIEW_ROUTE = ""; // TODO: error
  } else {
    VIEW_ROUTE = (
      <Router>
        <Route exact path="/" component={props => <Home {...props} />} />
      </Router>
    );
  }

  return (
    <div className="App">
      <header className="App-header">Highkick</header>
      {VIEW_ROUTE}
    </div>
  );
};

export default App;
