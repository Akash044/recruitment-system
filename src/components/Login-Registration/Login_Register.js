import React, { useState } from "react";
import {
  makeStyles,
  Button,
  TextField,
  Switch,
  FormControlLabel,
} from "@material-ui/core";



const Login_Register = () => {
  const classes = useStyles();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isEmployer, setIsEmployer] = useState(false);
  const [isUser, setIsUser] = useState(false);

  const handleOnRegister = (e) => {
    e.preventDefault();

    console.log("hi", email, " ", password, " ", isEmployer);
    if(isEmployer){
      fetch("http://localhost:8080/addEmployer",{
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({employerEmail:email}),
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      alert("employer added successfully")
    })
    }
  };
  const handleEmailPassLogin = (e) => {
    e.preventDefault();
    console.log("hi", email, " ", password, " ", isUser);
    
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
            // defaultValue="Hello World"
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
          {! isUser && <FormControlLabel
            control={
              <Switch
                checked={isEmployer}
                color="primary"
                onChange={() => setIsEmployer(!isEmployer)}
                name="isEmp"
              />
            }
            label="Employer?"
          />}
        </div>
        <Button type="submit" variant="contained" color="primary">
          {isUser ? "Login" : "Register"}
        </Button>
        <p>
          {isUser ? "New user?" : "Already have an account?"}
          <Button onClick={() => setIsUser(!isUser)}>
            {isUser ? "Register" : "Login"}
          </Button>
        </p>
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
    },
  }));
export default Login_Register;