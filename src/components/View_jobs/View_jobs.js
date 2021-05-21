import React, { useContext, useEffect, useState } from 'react';
import SingleJob from './SingleJob';
import { userContext } from '../../App';
import { makeStyles,} from "@material-ui/core";


const View_jobs = () => {
    const classes = useStyles();
    const [user, setUser] = useContext(userContext);
    const [allJobs, setAllJobs] = useState([]);
    
    useEffect(() =>{
        fetch(`http://localhost:8080/allPost?email=${user}`)
        .then(res => res.json())
        .then(data =>{
            setAllJobs(data);
        })

    },[user])

    return (
        <div className={classes.root}>
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