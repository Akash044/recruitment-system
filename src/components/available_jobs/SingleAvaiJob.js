import React from 'react';
import {
    makeStyles,
    Card,
    CardActions,
    CardContent,
    Button,
    Typography,
  } from "@material-ui/core";
  import { Link } from "react-router-dom";

const SingleAvaiJob = (props) => {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
    const {title,type,city,openings,ctc,requiredSkills,description,id} = props.jobInfo;
  
    const handleApplyBtn = () => {
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
         <Link to={`/apply/${id}`}> <Button variant="contained" color="primary">Apply</Button></Link>
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
export default SingleAvaiJob;