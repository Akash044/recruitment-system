import React, { useEffect, useState } from "react";
import {
  makeStyles,
  Button,
  TextField,
} from "@material-ui/core";
import { useParams, useHistory,} from "react-router-dom";
import firebase from "firebase/app";
import "firebase/storage";

const ApplyPage = () => {
  const { id } = useParams();
  const history = useHistory();
  const classes = useStyles();
  const [applicantInfo, setApplicantInfo] = useState({});
  const [applicantFile, setApplicantFile] = useState(null);

  useEffect(() => {
    fetch("https://tranquil-cove-03485.herokuapp.com/allPost")
      .then((res) => res.json())
      .then((data) => {
        const matched = data.filter((dt) => dt.id === id);
        setApplicantInfo({...matched[0]})
      })
      .catch((error) => {
      });
  }, [id]);

  const handleFileUpload = (e) => {
    setApplicantFile({ file: e.target.files[0] });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const storageRef = firebase.storage().ref().child(`${applicantInfo.email}${id}`);
    storageRef.put(applicantFile.file)
    .then((snapshot) => {
      alert("Submitted successfully");
      history.replace(`/appliedPost/${applicantInfo.email}`);
    });

    fetch("https://tranquil-cove-03485.herokuapp.com/addApplicant", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...applicantInfo, id: id }),
    })
      .then((res) => res.json())
      .then((data) => {
      
      })
      .catch((error) => {
      });
  };
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
            onBlur={(e) =>
              setApplicantInfo({ ...applicantInfo, name: e.target.value })
            }
          />
          <TextField
            required
            id="outlined-required"
            label="Email"
            variant="outlined"
            onBlur={(e) =>
              setApplicantInfo({ ...applicantInfo, email: e.target.value })
            }
          />

          <TextField
            required
            id="outlined-required"
            label="Phone Number"
            variant="outlined"
            type="number"
            onBlur={(e) =>
              setApplicantInfo({ ...applicantInfo, phone: e.target.value })
            }
          />
          <TextField
            required
            id="outlined-required"
            type="file"
            onChange={handleFileUpload}
          />
        </div>
        <Button type="submit" variant="contained" color="primary">
          submit
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
