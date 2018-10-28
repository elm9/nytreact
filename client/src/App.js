import React from "react";
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Articles from "./pages/Articles/Articles";
import Saved from "./pages/Saved/Saved";

const App = () => (
    <Router>
        <div>
            <Nav />
            <Switch>
                <Route exact path = "/" component={Articles} />
                <Route exact path = "/articles" component={Articles} />
                <Route exact path = "/articles/:id" component={Saved} />
            </Switch>
        </div>
    </Router>
);

export default App;