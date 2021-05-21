import React, { useContext, useEffect, useState } from 'react';
import SingleJob from './SingleJob';
import { userContext } from '../../App';
import { makeStyles,CircularProgress } from "@material-ui/core";


const View_jobs = () => {
    const classes = useStyles();
    const [user, setUser] = useContext(userContext);
    const [allJobs, setAllJobs] = useState([]);
    const [length, setLength] = useState(0);
    
    useEffect(() =>{
        fetch(`https://tranquil-cove-03485.herokuapp.com/allPost?email=${user}`)
        .then(res => res.json())
        .then(data =>{
            setLength(data.length);
            setAllJobs(data);
        })

    },[user])

    return (
        <div className={classes.root}>
            {
                (length != allJobs.length) && <CircularProgress color="secondary" />
            }
            {  
                allJobs?.map(job => <SingleJob key={job.id} jobInfo={job} />)
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
export default View_jobs;