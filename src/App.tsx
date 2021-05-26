import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Home } from './pages';

const App: React.FunctionComponent = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  )
};

export default App;