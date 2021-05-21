import { Grid, Paper, makeStyles, Button } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container justify="center" alignItems="center">
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            Find your perfect JOBS or APPLICANTS
          </Paper>
          <Paper className={classes.paper}>
            <Link to="/login">
              <Button variant="contained" color="primary">
                Get Started
              </Button>
            </Link>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: "grid",
    justifyContent: "center",
    alignItems: "center",
    height: "500px",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));
export default Home;
