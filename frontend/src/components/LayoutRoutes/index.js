import Register from "../../pages/Register";
import Logout from "../../pages/Logout";
import { Route, Switch, BrowserRouter as Router, useHistory } from 'react-router-dom';
import FormIdData from "../../pages/FormIdData";
import FormList from "../../pages/FormList";
import Login from "../../pages/Login";

const LayoutRoutes = () => {
  const routes = [
    {
      exact: true,
      path: '/',
      component: FormList
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/notes/:id',
      component: FormIdData
    },
    {
      path: '/register',
      component: Register
    },
    {
      path: '/logout',
      component: Logout
    },
  ];
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
