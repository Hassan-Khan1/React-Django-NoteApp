import './App.css';
import NoteHeader from './components/NoteHeader';
import { Route, Switch, BrowserRouter as Router, useHistory } from 'react-router-dom';
import { createBrowserHistory } from "history";

// Note Specific Id Data
import FormIdData from './pages/FormIdData/index.js';

// Note List Data
import FormList from './pages/FormList';

// Login Page
import Login from './pages/Login';
import { Layout } from 'antd';
import NoteFooter from './components/NoteFooter';
import Register from './pages/Register';

const { Header, Content, Footer } = Layout;

function App() {
  const history = useHistory();
  return (
    <Layout className="mainLayout">
      <Header>
        <NoteHeader history={history} />
      </Header>
      <Content style={{ marginTop: '100px' }}>
        <RouterWrap />
        {/* <FormList /> */}
      </Content>
      {/* <Footer> */}
      {/* <NoteFooter /> */}
      {/* </Footer> */}
    </Layout>
  );
}
export default App;

const RouterWrap = () => {
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


{/* <Router history={customHistory}>
<div className={`container dark`}>
  <div className="app">
    <Header />
    <Route exact path='/' component={FormList} />
    <Route exact path='/notes/:id' component={FormIdData} />
    <Route exact path='/login' component={Login} />
  </div>
</div>
</Router> */}