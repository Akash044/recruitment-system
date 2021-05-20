import React, { useContext, useEffect, useState } from 'react';
import SingleJob from './SingleJob';
import { useHistory, useLocation } from "react-router-dom";
import { userContext } from '../../App';


const View_jobs = () => {
    const history = useHistory();
    const [user, setUser] = useContext(userContext);
    const [allJobs, setAllJobs] = useState([]);
    
    useEffect(() =>{
        fetch(`http://localhost:8080/allPost?email=${user}`)
        .then(res => res.json())
        .then(data =>{
            setAllJobs(data);
        })

    },[])

    return (
        <div>
            {
                allJobs?.map(job => <SingleJob jobInfo={job} />)
            }
        </div>
    );
};

export default View_jobs;