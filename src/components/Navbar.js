import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <Link to="/login">
      Log-in 
      </Link>
      <Link to="/profile">
      Profile
      </Link>
      <Link to="/friends">
      Friends
      </Link>
      
    </div>
  )
}

export default Navbar