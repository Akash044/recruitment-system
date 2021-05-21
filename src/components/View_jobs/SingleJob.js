import React from "react";
import {
  makeStyles,
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
} from "@material-ui/core";
import {Link} from "react-router-dom";

const SingleJob = (props) => {
  const classes = useStyles();
  const {title,type,city,openings,ctc,requiredSkills,description, id} = props.jobInfo;

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
          <Typography
            className={classes.title}
            gutterBottom
          >
           <i>Job Title:</i> {title}
          </Typography>
          <Typography
            className={classes.title}
            gutterBottom
          >
          <i>Type:</i> {type}
          </Typography>
          <Typography
            className={classes.title}
            gutterBottom
          >
           <i>City:</i> {city}
          </Typography>
          <Typography
            className={classes.title}
            gutterBottom
          >
           <i>No. of Openings:</i> {openings}
          </Typography>
          <Typography
            className={classes.title}
            gutterBottom
          >
           <i>CTC:</i> {ctc}
          </Typography>
          <Typography
            className={classes.title}
            gutterBottom
          >
           <i>Description:</i> {description}
          </Typography>
          <Typography
            className={classes.title}
            gutterBottom
          >
           <i>Skills Required:</i> {requiredSkills}
          </Typography>
      
        </CardContent>
      <CardActions> <Link to = {`/applicants/${id}`}>
        <Button variant="contained" color="primary">See Applicants</Button></Link>
      </CardActions>
    </Card>
  );
};
const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  title: {
    fontSize: 18,
  },
});

export default SingleJob;
