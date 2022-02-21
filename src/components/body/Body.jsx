import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import ContactForm from "./ContactForm";
import Home from "./Home";
import Menu from "./Menu";

const Body = () => {
  return (
    <div>
      <Switch>
        <Route path="/home" exact component={Home} />
        <Route path="/menu" exact component={Menu} />
        <Route path="/about" exact component={About} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/contact-form" exact component={ContactForm} />
        <Redirect from="/" to="/home" />
      </Switch>
    </div>
  );
};

export default Body;
