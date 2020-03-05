import React from "react";
import * as routePath from "./Utils/RouteUrl";
import { Switch, Route } from "react-router-dom";

import Loadable from "react-loadable";
import { withRouter } from "react-router-dom";
import TermAndConditionPage from "./Home/HomeComponent/TermAndConditionPage";

const HomeContainer = Loadable({
  loader: () => import("./Home/Containers/HomeContainer"),
  loading() {
    return <div />;
  }
});
class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route path={routePath.APP_TNC} component={TermAndConditionPage} />
          <Route path={routePath.HOME_ROUTE} component={HomeContainer} />
        </Switch>
      </React.Fragment>
    );
  }
}
export default withRouter(App);
