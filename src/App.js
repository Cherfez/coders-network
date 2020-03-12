import React from "react";
import "./App.css";
import PostsList from "./pages/PostsList";
import DeveloperList from "./pages/DeveloperList/index";
import Home from "./pages/Home";
import { Route, Switch } from "react-router-dom";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div>
      <Navigation />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/posts" component={PostsList} />
        <Route path="/developers" component={DeveloperList} />
      </Switch>
    </div>
  );
}

export default App;
