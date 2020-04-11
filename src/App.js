import React from "react";
import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Catalog from "./pages/Catalog";
import News from "./pages/News";
import Footer from "./components/Footer";
import Shop from "./pages/Shop";
import Contact from "./pages/ContactUs";

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
          <Route path="/Shop" exact component={Shop} />
          <Route path="/Contact" component={Contact} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
