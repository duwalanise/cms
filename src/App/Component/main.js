import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Dashboard from './dashboard';
import Student from './Student';
import Staff from './dashboard';
import Finance from './dashboard';
import NotFound from './notfound';

export default () =>(
  <main>
    <Switch>
      <Route exact path='/' component={Dashboard}/>
      <Route exact path='/students' component={Student}/>
      <Route exact path='/staffs' component={Staff}/>
      <Route exact path='/finance' component={Finance}/>
      <Route path='/*' component={NotFound}/>
    </Switch>
  </main>
);