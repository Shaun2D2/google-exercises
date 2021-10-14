import React from 'react';

import GlobalStyles from './GlobalStyles';
import Hamburger from './Components/Navigation';
import Router from './Router';

const App = () => (
  <>
    <GlobalStyles />
    <Hamburger />
    <Router />
  </>
);

export default App;
