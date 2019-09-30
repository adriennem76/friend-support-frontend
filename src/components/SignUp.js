import React, {Component} from "react"
import * as types from "../actions/actionTypes"
import {connect} from "react-redux"
import {signUp} from "../actions/userActions"
import {withRouter} from 'react-router-dom';

class SignUp extends Component {

  state = {
    name: "",
    email: "",
    password: ""
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  signUp = (e) => {
    e.preventDefault()
    
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {'Content-Type': 'application/json' },
      body: JSON.stringify(this.state)
    })
    .then(resp => resp.json())
    .then(data => this.props.signUp(data))
    .then(this.props.history.push('/my-profile'))
  }

  render() {
    return (
      <div>
      
      <h3 className="ui teal center aligned header">Sign Up</h3>
      <form onSubmit={this.signUp} class="ui large form">
        <div className="ui stacked segment">
        <div className="field">
          <label>
            <input 
            placeholder="Name" 
            type="text" 
            name="name" 
            value={this.state.name} 
            onChange={this.handleChange}/>
            </label>
        </div>

        <div className="field">
          <label>
            <input 
            placeholder="email"
            type="text" 
            name="email" 
            value={this.state.email} 
            onChange={this.handleChange}/>
            </label>
        </div>

        <div className="field">
          <label>
            <input
            placeholder="password" 
            type="text" name="password" 
            value={this.state.password} 
            onChange={this.handleChange}/>
            </label>
        </div>

          <input type="submit" value="Submit" className="ui teal large fluid button"/>
        </div>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {signUp: newUser => dispatch(signUp(newUser))}
}

export default connect (
  null, mapDispatchToProps
)(SignUp)