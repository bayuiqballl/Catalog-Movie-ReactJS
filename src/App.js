import React from "react";
import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Catalog from "./pages/Catalog";
import News from "./pages/News";
import Footer from "./components/Footer";
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/About" exact component={About} />
          <Route path="/Catalog" exact component={Catalog} />
          <Route path="/News" exact component={News} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
