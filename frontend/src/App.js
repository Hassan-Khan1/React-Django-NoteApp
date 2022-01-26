import './App.css';
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
import UserHeader from './components/UserHeader';
import UserLayout from './Layout/user';
import { useSelector, useDispatch } from 'react-redux'

function App() {

  const localStorageToken = localStorage.getItem('myToken') ;
  const token = useSelector(state => state.userReducer.loginToken)

  return (
    <div>
      {localStorageToken <= null ?
        <AppLayout />
        :
        <UserLayout />
      }
    </div>
  );
}
export default App;

