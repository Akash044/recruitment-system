import React, { useEffect, useState } from "react";

import SingleAvaiJob from "./SingleAvaiJob";
import { makeStyles, CircularProgress } from "@material-ui/core";

const Available_jobs = () => {
  const classes = useStyles();
  const [allJobs, setAllJobs] = useState([]);
  const [length, setLength] = useState(0);

  useEffect(() => {
    fetch(`https://tranquil-cove-03485.herokuapp.com/allPost`)
      .then((res) => res.json())
      .then((data) => {
        setLength(data.length);
        setAllJobs(data);
      });
  }, []);

  return (
    <div className={classes.root}>
      {length != allJobs.length && <CircularProgress color="secondary" />}
      {allJobs.map((job) => (
        <SingleAvaiJob job={job.id} jobInfo={job} />
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
});
export default Available_jobs;
