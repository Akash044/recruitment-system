import React, { useContext, useState } from "react";
import {
  makeStyles,
  Button,
  TextField,
  Switch,
  FormControlLabel,
} from "@material-ui/core";
import { useHistory, useLocation } from "react-router-dom";
import { userContext } from "../../App";

const Post_a_job = () => {
  const history = useHistory();
  const classes = useStyles();
  const [jobInfo, setJobInfo] = useState({});
  const [user, setUser] = useContext(userContext);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(jobInfo);
    fetch("http://localhost:8080/addPost", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({...jobInfo, email : user,}),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        alert("job added successfully");
        history.replace("/view_jobs");
      });
  };

  return (
    <div className={classes.formDiv}>
      <form
        className={classes.root}
        autoComplete="off"
        onSubmit={handleOnSubmit}
      >
        <h3>Post your Job</h3>

        <div>
          <TextField
            required
            id="outlined-required"
            label="Job Title"
            variant="outlined"
            onBlur={(e) => setJobInfo({ ...jobInfo, title: e.target.value })}
          />
          <TextField
            required
            id="outlined-required"
            label="Job Type"
            variant="outlined"
            onBlur={(e) => setJobInfo({ ...jobInfo, type: e.target.value })}
          />
          <TextField
            required
            id="outlined-required"
            label="City"
            variant="outlined"
            onBlur={(e) => setJobInfo({ ...jobInfo, city: e.target.value })}
          />
          <TextField
            required
            id="outlined-required"
            label="No. of Openings"
            variant="outlined"
            type="number"
            onBlur={(e) => setJobInfo({ ...jobInfo, openings: e.target.value })}
          />
          <TextField
            required
            id="outlined-required"
            label="Job Description"
            variant="outlined"
            onBlur={(e) =>
              setJobInfo({ ...jobInfo, description: e.target.value })
            }
          />
          <TextField
            required
            id="outlined-required"
            label="Skills Required"
            variant="outlined"
            onBlur={(e) =>
              setJobInfo({ ...jobInfo, requiredSkills: e.target.value })
            }
          />
          <TextField
            required
            id="outlined-required"
            label="CTC"
            variant="outlined"
            type="number"
            onBlur={(e) => setJobInfo({ ...jobInfo, ctc: e.target.value })}
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

export default Post_a_job;
