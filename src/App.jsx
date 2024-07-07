import React from 'react'

import HomePage from './pages/HomePage';
import JobsPage from './pages/JobsPage';
import MainLayout from './layouts/MainLayout';
import NotFoundPage from './pages/NotFoundPage';
import SingleJobPage, { jobLoader } from './pages/SingleJobPage';
import AddJobsPage from './pages/AddJobsPage';

import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom';
import EditJobPage from './pages/EditJobPage';

const App = () => {
  // add new job
  const addJob = async (newJob) =>{
    const res = await fetch('/api/jobs',{
      method: 'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newJob),
    }
    );
    return;

  }

  // delete new job

  const deleteJob = async (id) => {
    const res = await fetch(`/api/jobs/${id}`,{
      method: 'DELETE',
    }
    );
    return;
  }

  // update job

  const updateJob = async (job) => {
    const res = await fetch(`/api/jobs/${job.id}`,{
      method: 'PUT',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(job),
    }
    );
  }
  
  const router = createBrowserRouter(
  
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path='/jobs' element={<JobsPage />} />
      <Route path='/jobs/:id' element={<SingleJobPage deleteJob = {deleteJob}/>} loader={jobLoader}/>
      <Route path='/add-job' element={<AddJobsPage addJobSubmit={addJob}/>}/>
      <Route path='/edit-job/:id' element={<EditJobPage updateJobSubmit= {updateJob}/>} loader={jobLoader}/>
      <Route path='*' element={<NotFoundPage />} />
    
  
    </Route>
  ));
  return ( <RouterProvider router={router} />);
  
};

export default App