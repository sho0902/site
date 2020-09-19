import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import mybusiness from "./components/pages/mybusiness";
import test from "./components/pages/test";

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/gmb" component={mybusiness} exact />
        <Route path="/" component={test} exact />
      </Switch>
    </Router>
  );
};

export default App;