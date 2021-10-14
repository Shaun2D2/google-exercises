import React, { useEffect } from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './Pages/Home';
import Playground from './Pages/Playground';

const AppRouter = () => {
  useEffect(() => console.log('application mounted!'));

  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} />
        <Router path="/playground" component={Playground} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
