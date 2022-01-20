import './App.css';
import Header from './components/Header';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import { createBrowserHistory } from "history";

// Note Specific Id Data
import NotePage from './pages/FormIdData/index.js';

// Note List Data
import NotesListPage from './pages/FormList';
import Login from './pages/Login';

const customHistory = createBrowserHistory();

function App() {
  console.log(window.location.pathname);

  // const userLogin = (token) =>{
  //   console.log('token...',token) 
  // } 
  // userLogin= {userLogin}

  return (
    <Router history={customHistory}>
      <div className={`container dark ${window.location.pathname === '/login' ? 'login-view' : ''}`}>
        <div className="app">
          <Header />
          {/* <Login /> */}
          <Route exact path='/' component={NotesListPage} />
          <Route exact path='/notes/:id' component={NotePage} />
          <Route exact path='/login' component={Login }  />
        </div>
      </div>
    </Router>
  );
}
export default App;
