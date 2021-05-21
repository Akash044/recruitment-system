import React, { useEffect, useState } from 'react';

import SingleAvaiJob from './SingleAvaiJob';
import { makeStyles } from "@material-ui/core";

const Available_jobs = () => {
    const classes = useStyles();
    const [allJobs, setAllJobs] = useState([]);
    
    useEffect(() =>{
        fetch(`http://localhost:8080/allPost`)
        .then(res => res.json())
        .then(data =>{
            setAllJobs(data);
        })

    },[])

    return (
        <div className ={classes.root}>
            {
                allJobs.map(job => <SingleAvaiJob job={job.id} jobInfo={job} /> )
            }
            
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