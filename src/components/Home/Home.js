import { Grid, Paper, makeStyles, Button } from "@material-ui/core";
import React from "react";
import {Link} from "react-router-dom";

const Home = () => {
  const classes = useStyles();



  const handleGetStartedBtn = ( ) => {



  }


  return (
    <div className={classes.root}>
      <Grid
        container
        direction="row" 
        justify="center"
        alignItems="center"
      >
        <Grid item xs={12}>
          <Paper className={classes.paper}>

         <Link to="/login"> <Button variant="contained" color="primary" onClick={handleGetStartedBtn}>
        Get Started
      </Button> </Link>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));
export default Home;
