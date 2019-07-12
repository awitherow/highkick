import React from "react";
import useGlobalHook from "use-global-hook";

import * as actions from "../actions";

// general state of the app
const initialAppState = {};

const initialState = {
  ...initialAppState,
  status: "LOADING",
};

const useGlobal = useGlobalHook(React, initialState, actions);

export default useGlobal;
