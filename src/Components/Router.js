import { Route, Switch } from "react-router-dom";
import Adminpanel from "./Adminpanel/Adminpanel";
import Login from "./Useraccount/Login/Login";
import Register from "./Useraccount/Register/Register";
function Router() {
  return (
    <>
      <Switch>
        <Route path="/" component={Adminpanel} exact />
        <Route path="/login" component={Login} exact />
        <Route path="/register" component={Register} exact />

        <Route component={Error} />
      </Switch>
    </>
  );
}
export default Router;
