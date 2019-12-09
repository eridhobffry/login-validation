import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import "./assets/css/bootstrap.min.css"
import App from './App';
import LoginPage from "../src/components/pages/register"
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route, Switch } from "react-router-dom";

ReactDOM.render(
<BrowserRouter>
    <Switch>
      <Route exact path="/" component={props => <LoginPage {...props} />} />
      <Route exact path="/test" component={props => <App {...props} />} />
      </Switch>
      </BrowserRouter>
      , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
