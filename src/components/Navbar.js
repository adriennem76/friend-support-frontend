import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from "react-redux"


const Navbar = (props) => {
  return (
    <div className="ui tablet computer only padded grid">
    <div className="ui top fixed borderless fluid huge menu">
      <div className="header item">Community Care</div>
      {props.loggedIn ? ( <div className="ui container"><Link to="/my-profile" className="item">
      Profile
      </Link>
      <Link to="/friends" className="item">
      Friends
      </Link>
      <Link to="/friend-search" className="item">
      Find Friends
      </Link>
      <div className="right menu">
        <Link to="/logout" className="item">
      Log-out
      </Link></div></div>) : ( <div className="ui container"><div className="right menu"><Link to="/login" className="item">
      Log-in 
      </Link></div></div>)}
      
      
    </div>
    
    </div>
  )
}

const mapStateToProps = state => {
  return {loggedIn: state.loggedIn}
}

export default connect (
  mapStateToProps
)(Navbar)