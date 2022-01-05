import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
// import NotesListPage from './pages/NoteList/NotesListPage';
import { Route, Switch, Router } from 'react-router-dom';
import { createBrowserHistory } from "history";
import NotePage from './pages/Note/NotePage';
// import NotesListPage from './pages/NoteList';
import NotesListPage from './pages/NoteList/NoteListPage';

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
