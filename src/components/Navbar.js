import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from "react-redux"


const Navbar = (props) => {
  return (
    <div>
      {props.loggedIn ? (<Link to="/logout">
      Log-out
      </Link>) : (<Link to="/login">
      Log-in 
      </Link>)}
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

const mapStateToProps = state => {
  return {loggedIn: state.loggedIn}
}

export default connect (
  mapStateToProps
)(Navbar)