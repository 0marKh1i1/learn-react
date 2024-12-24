import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HomeCards from './components/HomeCads'
import JobListing from './components/JobListing'
import ViewAllJobs from './components/ViewAllJobs'

const App = () => {
  return (
   <>
   <Navbar />
   <Hero title="hi" sub="iam omar"/>
   <HomeCards />
   <JobListing />
   <ViewAllJobs />
   </>
  )
}

export default App