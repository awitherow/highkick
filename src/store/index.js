import React from "react";
import useGlobalHook from "use-global-hook";

import * as actions from "../actions";

// general state of the app
const initialAppState = {};

const initialState = {
  ...initialAppState,
  habits: {},
  status: "GO",
};

const useGlobal = useGlobalHook(React, initialState, actions);

export default useGlobal;
