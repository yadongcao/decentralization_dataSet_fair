import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./reducers/reducer.js";
// Require Sass file so webpack can build it
// import "bootstrap/dist/css/bootstrap.css";
// import "./styles/style.css";
import preset from "@theme-ui/preset-future";

import Routes from "./Routes";
const store = createStore(rootReducer);
const theme = {
  ...preset,
};
ReactDOM.render(
  <Provider store={store} theme={theme}>
    <Routes />
  </Provider>,
  document.getElementById("root")
);
