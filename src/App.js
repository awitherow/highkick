import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import useGlobal from "./store";

import Home from "./views/Home";
import Loading from "./views/Loading";
import Error from "./views/Error";

import "./App.scss";

const App = () => {
  const [globalState] = useGlobal();

  let VIEW_ROUTE = null;
  if (globalState.status === "LOADING") {
    VIEW_ROUTE = <Loading />;
  } else if (globalState === "ERROR") {
    VIEW_ROUTE = <Error />;
  } else {
    VIEW_ROUTE = (
      <Router>
        <Route exact path="/" component={props => <Home {...props} />} />
      </Router>
    );
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Highkick</h1>
      </header>
      {VIEW_ROUTE}
    </div>
  );
};

export default App;
