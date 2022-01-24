import './App.css';
// import Header from './components/Header';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import { createBrowserHistory } from "history";

// Note Specific Id Data
import FormIdData from './pages/FormIdData/index.js';

// Note List Data
import FormList from './pages/FormList';

// Login Page
import Login from './pages/Login';
import { Layout, Menu, Breadcrumb } from 'antd';

const { Header, Content, Footer } = Layout;

const customHistory = createBrowserHistory();

function App() {
  console.log(window.location.pathname);
  return (

    <Router history={customHistory}>
      <div className={`container dark`}>
        <div className="app">
          <Header />
          <Route exact path='/' component={FormList} />
          <Route exact path='/notes/:id' component={FormIdData} />
          <Route exact path='/login' component={Login} />
        </div>
      </div>
    </Router>

  );
}
export default App;


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