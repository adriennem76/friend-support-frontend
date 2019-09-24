import React, {Component} from "react"
import * as types from "../actions/actionTypes"
import {connect} from "react-redux"
import {logout} from "../actions/userActions"

class LogOut extends Component {
  
  componentDidMount() {
    this.props.logout()
    this.props.history.push('/login')
  }
  render() {
    
    return (
      <div>Logging Out</div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {logout: () => dispatch(logout())}
}

export default connect (
  null, mapDispatchToProps
)(LogOut)

