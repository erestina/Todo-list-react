import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import {BrowserRouter as Router, useHistory} from "react-router-dom";


const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      < Router>
      <App />
      </Router>
    </React.StrictMode>
  </Provider>,
  rootElement
);
