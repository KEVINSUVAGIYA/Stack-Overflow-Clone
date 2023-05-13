import React from 'react'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import '../../App.css'
import RightSidebar from '../../components/RightSidebar/RigthSidebar'
import HomeMainbar from '../../components/HomeMainbar/HomeMainbar'



const Questions = () => {
  return (
    <div className='home-container-1'>
      <LeftSidebar/>
      <div className='home-container-2'>
        <HomeMainbar/>
        <RightSidebar/>
      </div>
    </div>
  )
}

export default Questions