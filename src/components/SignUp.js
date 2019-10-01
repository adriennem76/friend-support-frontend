import React, {Component} from "react"
import * as types from "../actions/actionTypes"
import {connect} from "react-redux"
import {signUp} from "../actions/userActions"
import {withRouter} from 'react-router-dom';
import { Button, Form, Message } from 'semantic-ui-react'

class SignUp extends Component {

  state = {
    name: "",
    email: "",
    password: "",
    error: false
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  signUp = (e) => {
    e.preventDefault()
    let user = {name: this.state.name, email: this.state.email, password: this.state.password}
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {'Content-Type': 'application/json' },
      body: JSON.stringify(user)
    })
    .then(resp => resp.json())
    .then(data => {
      if (data.id){
        this.props.history.push('/my-profile')
        return this.props.signUp(data)
      } else {
        this.setState({error: true})
      }
      })
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
        {this.state.error ? (<Message error
        header="Error"
        content="Email address is already associated with an existing account."/>): null}
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