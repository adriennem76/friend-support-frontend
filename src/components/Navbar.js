import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <Link to="/login">
      Log-in 
      </Link>
      <Link to="/my-profile">
      Profile
      </Link>
      <Link to="/friends">
      Friends
      </Link>
      <Link to="/friend-search">
      Find Friends
      </Link>
      
    </div>
  )
}

export default Navbar