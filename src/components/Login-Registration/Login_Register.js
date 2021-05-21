import React, { useContext, useState } from "react";
import {
  makeStyles,
  Button,
  TextField,
  Switch,
  FormControlLabel,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";

import firebaseConfig from "../../firebase.config";
import { userContext } from "../../App";
import firebase from "firebase/app";
import "firebase/auth";
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const Login_Register = () => {
  const classes = useStyles();
  
  const [user, setUser] = useContext(userContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isEmployer, setIsEmployer] = useState(false);
  const [isUser, setIsUser] = useState(false);
  const [message, setMessage] = useState("");

  const history = useHistory();

  const handleOnRegister = (e) => {
    e.preventDefault();
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        const message = "Account is successfully created! Click sign in";
        setMessage(message);
      })
      .catch((error) => {
        setMessage(error.message);
      });

    console.log("hi", email, " ", password, " ", isEmployer);
    if (isEmployer) {
      fetch("http://localhost:8080/addEmployer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ employerEmail: email }),
      })
        .then((res) => res.json())
        .then((data) => {
          alert("employer added successfully");
        });
    }
  };

  const handleEmailPassLogin = (e) => {
    e.preventDefault();
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setUser(user.email);
        const message = "successfully signed in";
        setMessage(message);

        fetch(`http://localhost:8080/isEmployer?email=${user.email}`)
          .then((res) => res.json())
          .then((data) => {
            if(data){
              history.replace('/make_job_post');
            }else{
              history.replace('/available_jobs')
            }
          });         
      })
      .catch((error) => {
        setMessage(error.message);
      });
  };

  return (
    <div className={classes.formDiv}>
      <form
        className={classes.root}
        autoComplete="off"
        onSubmit={isUser ? handleEmailPassLogin : handleOnRegister}
      >
        <div>
          <h3>{isUser ? "Please login" : "Please Register"}</h3>
          <TextField
            required
            id="outlined-required"
            label="Email"
            type="email"
            variant="outlined"
            onBlur={(e) => setEmail(e.target.value)}
          />

          <TextField
            required
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            variant="outlined"
            onBlur={(e) => setPassword(e.target.value)}
          />
          {!isUser && (
            <FormControlLabel
              control={
                <Switch
                  checked={isEmployer}
                  color="primary"
                  onChange={() => setIsEmployer(!isEmployer)}
                  name="isEmp"
                />
              }
              label="Are you an employer?"
            />
          )}
        </div>
        <Button type="submit" variant="contained" color="primary">
          {isUser ? "Login" : "Register"}
        </Button>
        <p>
          {isUser ? "Are you new user?" : "Already have an account?"}
          <Button onClick={() => setIsUser(!isUser)} color="primary">
            {isUser ? "Register" : "Login"}
          </Button>
        </p>
        <h5>{message}</h5>
      </form>
      
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  formDiv: {
    height: "400px",
    display: "grid",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "100px"
  },
}));
export default Login_Register;
