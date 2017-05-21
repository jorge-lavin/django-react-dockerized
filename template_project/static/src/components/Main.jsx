import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './Home';
import LoginForm from './LoginForm';

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={LoginForm} />
    </Switch>
  </main>
);

export default Main;
