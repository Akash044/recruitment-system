import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  makeStyles,
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
} from "@material-ui/core";
import firebase from "firebase/app";
import "firebase/storage";

const Applicants = () => {
  const classes = useStyles();
  const { id } = useParams();
  const [applicants, setApplicants] = useState([]);
  const [url, setUrl] = useState({});

  useEffect(() => {
    fetch(`http://localhost:8080/allApplicants?jobId=${id}`)
      .then((res) => res.json())
      .then((data) => {
        setApplicants(data);
      });
  }, [id]);

  const handleResume = (email) => {
    const storageRef = firebase.storage().ref().child(`${email}${id}`);
    storageRef
      .getDownloadURL()
      .then((url) => {
        setUrl({url:url, email:email});
      })
      .catch((error) => {
      });
  };

  return (
    <div className={classes.root}>
      <h2>All Applicants</h2>
      {applicants?.map((applicant) => (
        <Card className={classes.card}>
          <CardContent>
            <Typography className={classes.title} gutterBottom>
              {applicant.name}
            </Typography>
            <Typography variant="h6" component="h4">
              {applicant.email}
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              {applicant.phone}
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              size="small"
              color="primary"
              variant="contained"
              onClick={() => handleResume(applicant.email)}
            >
              load resume
            </Button>
            {
               ( url.url && url.email === applicant.email) && <a href={url.url} target="_blank" rel="noreferrer"><Button
                size="small"
                color="primary"
                variant="contained"
              >
                see resume
              </Button></a>
            }
          </CardActions>
        </Card>
      ))}
    </div>
  );
};

const useStyles = makeStyles({
  root: {
    display: "grid",
    justifyContent: "center",
    marginTop: "100px"
  },
  card: {
    border: "1px solid red",
    marginBottom: "5px",
  },
  title: {
    fontSize: 24,
  },
  pos: {
    marginBottom: 12,
  },
});

export default Applicants;
