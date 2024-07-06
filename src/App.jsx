import React from 'react'

import HomePage from './pages/HomePage';
import JobsPage from './pages/JobsPage';
import MainLayout from './layouts/MainLayout';
import NotFoundPage from './pages/NotFoundPage';

import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom';

const router = createBrowserRouter(

  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
    <Route index element={<HomePage />} />
    <Route index path='/jobs' element={<JobsPage />} />
    <Route index path='*' element={<NotFoundPage />} />

  </Route>
));
const App = () => {
  return ( <RouterProvider router={router} />);
  
};

export default App