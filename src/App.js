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
import Post_a_job from './components/Post_a_job/Post_a_job';
import View_jobs from './components/View_jobs/View_jobs';
import { createContext, useState } from 'react';
import Available_jobs from './components/available_jobs/Available_jobs';
import ApplyPage from './components/ApplyPage/ApplyPage';
import Applicants from './components/Applicants/Applicants';
import My_applied_projects from './components/My_applied_projects/My_applied_projects';

export const userContext = createContext({});

function App() {
  const [user, setUser] = useState({});
  return (
    <userContext.Provider value={[user, setUser]}>
    <Router>
      <div>
        <ButtonAppBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          
          <Route path="/login">
            <Login_Register />
          </Route>
          <Route path="/make_job_post">
            <Post_a_job />
          </Route>
          <Route path="/view_jobs">
            <View_jobs />
          </Route>
          <Route path="/available_jobs">
            <Available_jobs />
          </Route>
          <Route path="/apply/:id">
            <ApplyPage />
          </Route>
          <Route path="/applicants/:id">
            <Applicants />
          </Route>
          <Route path="/appliedPost/:email">
            <My_applied_projects />
          </Route>

        </Switch>
      </div>
    </Router>
    </userContext.Provider>
  );
}

export default App;
