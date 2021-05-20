import React, { useState } from 'react';
import {
    makeStyles,
    Button,
    TextField,
    Switch,
    FormControlLabel,
  } from "@material-ui/core";
import { useParams } from 'react-router-dom';

const ApplyPage = () => {
    const {id} = useParams();
    const classes = useStyles();
    const [applicantInfo, setApplicantInfo] = useState({});

    const handleFileUpload = () => {

    }

    const handleOnSubmit = () => {

    }
    return (

        <div className={classes.formDiv}>
        <form
          className={classes.root}
          autoComplete="off"
          onSubmit={handleOnSubmit}
        >
          <h3>Applicant Information</h3>
  
          <div>
            <TextField
              required
              id="outlined-required"
              label="Name"
              variant="outlined"
              onBlur={(e) => setApplicantInfo({ ...applicantInfo, name: e.target.value })}
            />
            <TextField
              required
              id="outlined-required"
              label="Email"
              variant="outlined"
              onBlur={(e) => setApplicantInfo({ ...applicantInfo, email: e.target.value })}
            />
            
            <TextField
              required
              id="outlined-required"
              label="Phone Number"
              variant="outlined"
              type="number"
              onBlur={(e) => setApplicantInfo({ ...applicantInfo, phone: e.target.value })}
            />
            <TextField
              required
              id="outlined-required"
              type = "file"
              onBlur={() =>
                handleFileUpload
              }
            />
          </div>
          <Button type="submit" variant="contained" color="primary">
            post
          </Button>
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
      height: "500px",
      display: "grid",
      justifyContent: "center",
      alignItems: "center",
    },
  }));
export default ApplyPage;