import React from 'react'

import HomePage from './pages/HomePage';
import JobsPage from './pages/JobsPage';
import MainLayout from './layouts/MainLayout';
import NotFoundPage from './pages/NotFoundPage';
import SingleJobPage, { jobLoader } from './pages/SingleJobPage';
import AddJobsPage from './pages/AddJobsPage';

import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom';

const App = () => {
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
  
  const router = createBrowserRouter(
  
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path='/jobs' element={<JobsPage />} />
      <Route path='/jobs/:id' element={<SingleJobPage/>} loader={jobLoader}/>
      <Route path='/add-job' element={<AddJobsPage addJobSubmit={addJob}/>}/>
      <Route path='*' element={<NotFoundPage />} />
    
  
    </Route>
  ));
  return ( <RouterProvider router={router} />);
  
};

export default App