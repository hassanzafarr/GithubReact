import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Header from "./components/header";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Link, Switch, Redirect } from "react-router-dom";
import Form from "./components/login/Form";
import Cards from "./components/card/card";
import { Row, Col } from "react-bootstrap";
import FooterPage from "./components/footer";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/">
        {" "}
        <Header />
        
        <Cards />

        <FooterPage/>
      </Route>

      <Route path="/login">
        {" "}
        <Form />{" "}
      </Route>

      <Redirect to="/" />
    </Switch>
  </BrowserRouter>,
  rootElement
);
reportWebVitals();
