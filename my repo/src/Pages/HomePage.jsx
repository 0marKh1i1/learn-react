import React from 'react'
import Hero from '../components/Hero'
import HomeCads from '../components/HomeCads'
import JobListing from '../components/JobListing'
import ViewAllJobs from '../components/ViewAllJobs'


const HomePage = () => {
  return (
    <>
    <Hero/>
    <HomeCads/>
    <JobListing isHome={true}/>
    <ViewAllJobs/>
    </>

)
}

export default HomePage