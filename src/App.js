import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from './Navbar'
import Insurance from './Insurance'
import InsuranceCreate from './InsuranceCreate'
import InsuranceUpdate from './InsuranceUpdate'

export default function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Insurance} />
          <Route exact path='/create' component={InsuranceCreate} />
          <Route exact path='/update/:id' component={InsuranceUpdate} />
        </Switch>
      </div>
    </Router>
  );
}