import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import IndecisionApp from '../components/IndecisionApp';
import Header from '../components/Header';
import AboutMe from '../components/AboutMe';
const subtitle = 'Put your life in the hands of a computer';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header subtitle={subtitle}  />
      <Switch>
        <Route path="/" component={IndecisionApp} exact={true} />
        <Route path="/info" component={AboutMe} />
        {/* <Route component={NotFoundPage} /> */}
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;