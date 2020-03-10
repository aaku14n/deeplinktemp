import React from "react";
import * as routePath from "./Utils/RouteUrl";
import { Switch, Route } from "react-router-dom";

import Loadable from "react-loadable";
import { withRouter } from "react-router-dom";
import TermAndConditionPage from "./Home/HomeComponent/TermAndConditionPage";
import Header from "./Header";
import ContactUs from "./Home/HomeComponent/ContactUs";

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
        <Header />
        <div style={{ paddingTop: "70px" }}>
          <Switch>
            <Route path={routePath.APP_TNC} component={TermAndConditionPage} />
            <Route path={routePath.CONTACT_US} component={ContactUs} />
            <Route path={routePath.HOME_ROUTE} component={HomeContainer} />
          </Switch>
        </div>
      </React.Fragment>
    );
  }
}
export default withRouter(App);
