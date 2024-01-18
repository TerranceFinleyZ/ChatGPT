import Header from '@/components/Header'
import Simslider from '@/components/Simslider'
import React from 'react'

const page = () => {
  return (
    <div>
      <Header/>
      <div className='flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img'>
        <div className='p-5 text-gray-200'>
            <h2 className='text-7xl'>Our Mission.</h2>
        </div>
      </div>
      <Simslider />
    </div>
  )
}

export default page