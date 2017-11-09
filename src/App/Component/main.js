import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import Student from './Student';
import Staff from './Staff';
import Finance from './Finance';
import NotFound from './Utility/notfound';

export default () => (
  <main>
    <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route exact path="/students" component={Student} />
      <Route exact path="/staffs" component={Staff} />
      <Route exact path="/finance" component={Finance} />
      <Route path="/*" component={NotFound} />
    </Switch>
  </main>
);
