import { react } from "react";
import Register from "../../pages/Register";
import Logout from "../../pages/Logout";
import { Route, Switch, BrowserRouter as Router, useHistory } from 'react-router-dom';
import FormIdData from "../../pages/FormIdData";
import FormList from "../../pages/FormList";
import Login from "../../pages/Login";

const LayoutRoutes = ({ routes }) => {
  return (
    <Switch>
      {routes.map(({ path, component, exact }, i) => (
        <Route
          exact={exact}
          key={i}
          path={path}
          component={component}
        />
      ))}
    </Switch>
  )
}

export default LayoutRoutes;
