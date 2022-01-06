import './App.css';
import Header from './components/Header';
import { Route, Switch, Router } from 'react-router-dom';
import { createBrowserHistory } from "history";

// Note Specific Id Data
import NotePage from './pages/FormIdData/index.js';

// Note List Data
import NotesListPage from './pages/FormList';

const customHistory = createBrowserHistory();

function App() {
  return (
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
