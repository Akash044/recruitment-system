import React from "react";
import {
  makeStyles,
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
} from "@material-ui/core";

const SingleJob = (props) => {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  const {title,type,city,openings,ctc,requiredSkills,description} = props.jobInfo;

  const handleApplicantBtn = () => {
      console.log('clicked')
  }

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          {title}
        </Typography>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
         {type}
        </Typography>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          {city}
        </Typography>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          {openings}
        </Typography>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          {ctc}
        </Typography>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          {description}
        </Typography>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          {requiredSkills}
        </Typography>
    
      </CardContent>
      <CardActions>
        <Button variant="contained" color="primary" onClick={handleApplicantBtn}>Applicants</Button>
      </CardActions>
    </Card>
  );
};
const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default SingleJob;
