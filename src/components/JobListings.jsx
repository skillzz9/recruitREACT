import React from 'react'
import jobs from '../jobs.json';
import JobListing from './JobListing';
import { Link } from 'react-router-dom'

const JobListings = ({ isHome = false}) => {
    const jobsListings = isHome ? jobs.jobs.slice(0,3) : jobs.jobs;
    const jobsListingsText = isHome ? "Recent Jobs" : "All Jobs"

  return (
    <section className="bg-blue-50 px-4 py-10">
        <div className="container-xl lg:container m-auto">
          <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
            {jobsListingsText}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {jobsListings.map((job)=>(
                <JobListing key = {job.id} job = {job}></JobListing>
            ))}
          </div>
        </div>
      </section>
  
  );
};

export default JobListings