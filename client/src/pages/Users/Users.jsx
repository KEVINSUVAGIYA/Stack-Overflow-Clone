import React from 'react'
import './Users.css'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import { useLocation } from 'react-router-dom'
import UsersList from './UsersList'

const Users = () => {

  const location = useLocation()

  return (
    <div className='home-container-1'>
        <LeftSidebar/>
        <div className="home-container-2">
          {
            location.pathname === '/Users' ? 
            <UsersList/> :
            <></>
          }
        </div>
    </div>
  )
}

export default Users