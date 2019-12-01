import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import store from "./store/store";
import Form from './containers/Form';
import './index.css';


const rootEl = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <div className="container">
      <h2>Form Demo</h2>
      <Form />
    </div>
  </Provider>,
  rootEl
);
