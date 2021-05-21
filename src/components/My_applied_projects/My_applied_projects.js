import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  makeStyles,
  Card,
  CardContent,
  Typography,
  CircularProgress,
} from "@material-ui/core";

const My_applied_projects = () => {
  const classes = useStyles();
  const { email } = useParams();
  const [appliedPosts, setAppliedPosts] = useState([]);
  const [length, setLength] = useState(0);

  useEffect(() => {
    fetch(
      `https://tranquil-cove-03485.herokuapp.com/appliedPosts?email=${email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setLength(data.length);
        setAppliedPosts(data);
      });
  }, [email]);
  return (
    <div className={classes.root}>
      <h2>All applied Projects</h2>
      {length != appliedPosts.length && <CircularProgress color="secondary" />}
      {appliedPosts?.map((post) => (
        <Card key={post.id} className={classes.card}>
          <CardContent>
            <Typography className={classes.title} gutterBottom>
              <i>Job Title:</i> {post.title}
            </Typography>
            <Typography className={classes.title} gutterBottom>
              <i>Job Type:</i> {post.type}
            </Typography>
            <Typography className={classes.title} gutterBottom>
              <i>City:</i> {post.city}
            </Typography>
            <Typography className={classes.title} gutterBottom>
              <i> No. of openings:</i> {post.openings}
            </Typography>
            <Typography className={classes.title} gutterBottom>
              <i>CTC:</i> {post.ctc}
            </Typography>
            <Typography className={classes.title} gutterBottom>
              <i>Description:</i> {post.description}
            </Typography>
            <Typography className={classes.title} gutterBottom>
              <i>Skills Required:</i> {post.requiredSkills}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
const useStyles = makeStyles({
  root: {
    display: "grid",
    justifyContent: "center",
    marginTop: "100px",
  },
  card: {
    border: "1px solid red",
    marginBottom: "5px",
  },

  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
export default My_applied_projects;
