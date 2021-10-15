import React, { useEffect } from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './Pages/Home';
import Playgrounds from './Pages/Playgrounds';
import Playground from './Pages/Playground';
import NotFound from './Pages/NotFound';

const AppRouter = () => {
  useEffect(() => console.log('application mounted!'));

  return (
    <Router>
      <Switch>
        <Route path="/playgrounds" component={Playgrounds} />
        <Route path="/playgrounds/:difficulty/:id" component={Playground} />
        <Route path="/" component={Home} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
