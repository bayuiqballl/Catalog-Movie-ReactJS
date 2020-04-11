import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Home from "./pages/Home";
import Shop from "./pages/Shop";

function App() {
  return (
    <Router>
      <div className="App">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/Shop">
          <Shop />
        </Route>
      </Switch>
      </div>
    </Router>
  );
}

export default App;
