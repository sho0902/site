import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import mybusiness from "./components/pages/mybusiness";
import home from "./components/pages/home";

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/gmb" component={mybusiness} exact />
        <Route path="/" component={home} exact />
      </Switch>
    </Router>
  );
};

export default App;