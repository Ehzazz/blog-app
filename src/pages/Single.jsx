import React from 'react'
import Sidebar from '../components/sidebar/Sidebar'
import Singlepost from '../components/singlepost/Singlepost'

const Single = () => {
  return (
    <div className='flex'>
      <div className='w-[75%]'>
      <Singlepost/>
      </div>
      <div className='w-[25%]'>
        <Sidebar/>
        </div>
        
    </div>
  )
}

export default Single