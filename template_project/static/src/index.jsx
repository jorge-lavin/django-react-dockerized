import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom';

import App from './app';

const reactRoot = window.document.getElementById("react-app");
ReactDOM.render((
  <BrowserRouter>
    <App/>
  </BrowserRouter>
), reactRoot);
