import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import NotesListPage from './pages/NotesListPage';
import { Route, Switch, Router } from 'react-router-dom';
import { createBrowserHistory } from "history";
import NotePage from './components/NotePage';

const customHistory = createBrowserHistory();

function App() {
  return (
    // <div className="App">
    //  <Header />
    //  <NotesListPage />

    // </div>

  <Router history={customHistory}>

    
    <div className="container dark">
    <div className="app">
    <Header />
    <Route exact path='/' component={NotesListPage} />   
    <Route exact path='/notes/:id' component={NotePage} />   
    </div>
    </div>
  </Router>
  );
}

export default App;
