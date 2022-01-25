import './App.css';
import NoteHeader from './components/NoteHeader';
import { Route, Switch, BrowserRouter as Router, useHistory } from 'react-router-dom';
import { Layout } from 'antd';

// Note Specific Id Data
import FormIdData from './pages/FormIdData/index.js';

// Note List Data
import FormList from './pages/FormList';

// Page Component 
import Login from './pages/Login';
import Register from './pages/Register';
import Logout from './pages/Logout';

// Footer Component
import NoteFooter from './components/NoteFooter';

//Layout App 
import AppLayout from './Layout/app';


function App() {

  const { Header, Content, Footer } = Layout;
  const history = useHistory();
  return (
    // <Layout className="mainLayout">
    //     <NoteHeader history={history} />
    //   <Content style={{ marginTop: '100px' }}>
    //     <RouterWrap />
    //     {/* <FormList /> */}
    //   </Content>
    //   {/* <Footer> */}
    //   {/* <NoteFooter /> */}
    //   {/* </Footer> */}
    // </Layout>
    <div>
      <AppLayout />
    </div>

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