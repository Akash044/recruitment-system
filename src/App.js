import './App.css';
import ButtonAppBar from './components/AppBar/ButtonAppBar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import Login_Register from './components/Login-Registration/Login_Register';

function App() {
  return (
    <Router>
      <div>
        <ButtonAppBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          
          <Route path="/login">
            <Login_Register />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
