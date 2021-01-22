import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import UserAbout from "./components/UserAbout";
import AddDev from "./pages/AddDev";
import DevList from "./pages/DevList";
import Home from "./pages/home";

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={Home} path="/" exact />
      </Switch>
      <Route component={DevList} path="/devList" />
      <Route component={AddDev} path="/Adddev" />
      <Route component={UserAbout} path="/devList/user/:id" />
    </BrowserRouter>
  );
};

export default Routes;
