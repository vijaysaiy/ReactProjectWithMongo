import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import '../node_modules/@momentum-ui/core/css/momentum-ui.css';
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./redux/store";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

reportWebVitals();
