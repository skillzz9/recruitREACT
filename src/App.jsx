import React from 'react'

import HomePage from './pages/HomePage';
import JobsPage from './pages/JobsPage';

import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom';
import MainLayout from './layouts/MainLayout';

const router = createBrowserRouter(

  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
    <Route index element={<HomePage />} />
    <Route index path='/jobs' element={<JobsPage />} />
  </Route>
));
const App = () => {
  return ( <RouterProvider router={router} />);
  
};

export default App