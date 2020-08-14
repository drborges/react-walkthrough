import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavBar from "./kits/NavBar";
import Profile from "./pages/Profile";
import Project from "./pages/Project";
import Projects from "./pages/Projects";

export default function App() {
  return (
    <Router>
      <NavBar />

      <Switch>
        <Route path="/">
          <Profile />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/projects/:id">
          <Project />
        </Route>
      </Switch>
    </Router>
  );
}
