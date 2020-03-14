import React, { useEffect } from "react";
import "./App.css";
import PostsList from "./pages/PostsList";
import DeveloperList from "./pages/DeveloperList/index";
import Home from "./pages/Home";
import { Route, Switch } from "react-router-dom";
import Navigation from "./components/Navigation";
import PostDetails from "./pages/PostDetails";
import DeveloperDetails from "./pages/DeveloperDetails/index";
import SignUp from "./pages/SignUp/index";
import Login from "./pages/Login/index";
import { useDispatch } from "react-redux";
import { fetchOwnProfile } from "./store/user/action";

function App() {
  // is my token still valid? if not logout
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchOwnProfile());
  }, [dispatch]);

  return (
    <div>
      <Navigation />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/posts" component={PostsList} />
        <Route path="/posts/:id" component={PostDetails} />
        <Route exact path="/developers" component={DeveloperList} />
        <Route path="/developers/:id" component={DeveloperDetails} />
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={Login} />
      </Switch>
    </div>
  );
}

export default App;
