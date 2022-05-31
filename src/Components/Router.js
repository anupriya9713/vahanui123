import { Route, Switch } from "react-router-dom";
import Adminpanel from "./Adminpanel/Adminpanel";
import Login from "./Useraccount/Login/Login";
import Register from "./Useraccount/Register/Register";
import Form from "./Form/Form";
import Dashboard from "./Dashboard/Dashboard";
function Router() {
  return (
    <>
      <Switch>
        <Adminpanel />
        {/* <Route path="/dashboard" component={Dashboard} exact /> */}
        <Route path="/login" component={Login} exact />
        {/* <Route path="/register" component={Register} exact />
        <Route path="/form" component={Form} exact /> */}

        <Route component={Error} />
      </Switch>
    </>
  );
}
export default Router;
