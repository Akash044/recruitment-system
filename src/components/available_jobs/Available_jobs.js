import React, { useContext, useEffect, useState } from 'react';
import { userContext } from '../../App';
import SingleAvaiJob from './SingleAvaiJob';

const Available_jobs = () => {
    const [user, setUser] = useContext(userContext);
    const [allJobs, setAllJobs] = useState([]);
    
    useEffect(() =>{
        fetch(`http://localhost:8080/allPost`)
        .then(res => res.json())
        .then(data =>{
            setAllJobs(data);
        })

    },[])

    return (
        <div>
            {
                allJobs.map(job => <SingleAvaiJob jobInfo={job} /> )
            }
            
        </div>
    );
};

export default Available_jobs;