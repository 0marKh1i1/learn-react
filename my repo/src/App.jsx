import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import React from 'react'
import MainLayout from './layouts/MainLayout'
import HomePage from './Pages/HomePage';
import JobsPage from './Pages/JobsPage';
import AddPage from './Pages/AddPage';
import NotFoundPage from './Pages/NotFoundPage';
import JobPage , {jobLoader} from './Pages/JobPage';
import EditJob from './Pages/EditJob';


const App = () => {
  // add job
  const addJobSubmit = async (newJob) => {
    const submitter = await fetch('/api/jobs',{
      method: "post",
      headers:{
        'Content-Type' : "application/json",
      },
      body: JSON.stringify(newJob),
    })
    return;
  }
  //delete job
  const deleteJobSubmit = async (id) => {
    const submitter = await fetch(`/api/jobs/${id}`,{
      method: "DELETE",
    })
    return;
  }
  //update Job
  const updateJobSubmit = async (UpdatedJob) => {
    const submitter = await fetch(`/api/jobs/${UpdatedJob.id}`,{
      method: "PUT",
      headers:{
        'Content-Type' : "application/json",
      },
      body: JSON.stringify(UpdatedJob),
    })
    return;
  }

  const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout/>}>
        <Route index element={<HomePage/>} />)
        <Route path='/jobs' element={<JobsPage/>} />)
        <Route path='/Add-Job' element={<AddPage addJobSubmit={addJobSubmit}/>} />)
        <Route path='/jobs/:id' element={<JobPage deleteJobSubmit={deleteJobSubmit} />} loader={jobLoader}/>)
        <Route path='/jobs-edit/:id' element={<EditJob  updateJobSubmit={updateJobSubmit}/>} loader={jobLoader}/>)
        <Route path='*' element={<NotFoundPage/>} />)
    </Route>
  )
);

  return <RouterProvider router={router}/>
}

export default App