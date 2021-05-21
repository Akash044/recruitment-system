import React from 'react';
import { makeStyles,AppBar,Toolbar,Typography } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
          JobDoor
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}