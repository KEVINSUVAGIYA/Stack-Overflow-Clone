import React from 'react'
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux'

import logo from '../../assets/logo.png'
import './Navbar.css'
import search  from '../../assets/search.svg'
import Avatar from '../../components/Avatar/Avatar'

const Navbar = () => {

  var User = useSelector((state)=> (state.currentUserReducer))

  return (
    <nav className='main-nav'>
      <div className='navbar'>
        <Link to='/' className='nav-item nav-logo'>
          <img  src={logo} alt = 'logo' />
        </Link>
        <Link to = '/' className='nav-item nav-btn'>About</Link>
        <Link to = '/' className='nav-item nav-btn'>Products</Link>
        <Link to = '/' className='nav-item nav-btn'>For Teams</Link>
        <form>
          <input type="text" placeholder='Search...' />
          <img className='search-icon' src={search} alt="search" />
        </form>

        {User === null ?
        <>
            <Link to= '/Auth' className='nav-item nav-links'>Log in</Link>
            </>:  
            <>
              <Avatar  backgroundColor='#009dff' px="10px" py="7px" borderRadius="50%" textDecoration="none"><Link to='/User' style={{color:"white" , textDecoration:'none'}}>M</Link></Avatar> 
              <button className='nav-logout nav-item nav-links'>Log out</button>
            </>        
        }
      </div>
    </nav>
  )
}

export default Navbar;