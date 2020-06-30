import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import pollServices from "./services/poll";

import { GlobalStyle } from "./components/Common";
import Loader from "./components/Common/Loader";
import Home from "./components/Home";
import Create from "./components/Create";
import View from "./components/View";

const App = () => {
  const [polls, setPolls] = useState(null);

  useEffect(() => {
    pollServices.getAll(setPolls);
  }, []);

  return (
    <Router>
      <GlobalStyle />
      {polls ? (
        <Switch>
          <Route path="/" exact>
            <Home polls={polls} />
          </Route>
          <Route path="/new">
            <Create polls={polls} setPolls={setPolls} />
          </Route>
          <Route path="/:id">
            <View polls={polls} setPolls={setPolls} />
          </Route>
        </Switch>
      ) : (
        <Loader />
      )}
    </Router>
  );
};

export default App;
