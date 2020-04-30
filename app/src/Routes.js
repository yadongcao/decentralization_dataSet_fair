import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Download from "./Download";
import HotTopic from "./HotTopic";
import My from "./My";
import CreateNewProblem from "./CreateNewProblem";
import UploadDataSet from "./UploadDataSet";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <HotTopic />
      </Route>
      <Route exact path="/pools/new">
        <CreateNewProblem />
      </Route>
      <Route exact path="/datasets/new">
        <UploadDataSet />
      </Route>
      <Route exact path="/my">
        <My />
      </Route>
      <Route path="/download">
        <Download />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Router;
