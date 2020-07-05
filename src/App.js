import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
// import { Quiz } from "./assignment/test";
import FeedPage from "./assignment-unlu/pages/feeds/feeds";
import { withRouter, Switch, Route } from "react-router-dom";
import { axiosService } from "./core/http/axios-service";
import { ROUTES_NAMES } from "./shared/routes/route-name";
import { ServerError } from "./shared/pages/server-error";

function App(props) {
  axiosService.registorHistory(props.history);
  return (
    <div className="container-fluid ">
      <Switch>
        <Route exact path={ROUTES_NAMES.HOME}>
          <FeedPage />
        </Route>

        <Route path={ROUTES_NAMES.SERVER_ERROR_50X}>
          <ServerError />
        </Route>
      </Switch>
    </div>
  );
}

export default withRouter(App);
