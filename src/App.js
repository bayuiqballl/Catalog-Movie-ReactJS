import React from "react";
import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Catalog from "./pages/Catalog";
import News from "./pages/News";
import Footer from "./components/Footer";
import Unsplash from "./pages/Unsplash";
// import Shop from "./pages/Shop";
// import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/"><Home/></Route>
          <Route path="/About"><About/></Route>
          <Route path="/Catalog"><Catalog/></Route>
          <Route path="/News"><News/></Route>
          <Route path="/Shop"></Route>
          <Route path="/Contact"></Route>
          <Route path="/Unsplash"><Unsplash/></Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
