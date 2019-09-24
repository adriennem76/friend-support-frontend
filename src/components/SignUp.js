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
      <form onSubmit={this.signUp}>

        <div>
          <label>
            <input 
            placeholder="Name" 
            type="text" 
            name="name" 
            value={this.state.name} 
            onChange={this.handleChange}/>
            </label>
        </div>

        <div>
          <label>
            <input 
            placeholder="email"
            type="text" 
            name="email" 
            value={this.state.email} 
            onChange={this.handleChange}/>
            </label>
        </div>

        <div>
          <label>
            <textarea 
            placeholder="password" 
            type="text" name="password" 
            value={this.state.password} 
            onChange={this.handleChange}/>
            </label>
        </div>

          <input type="submit" value="Submit" />
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