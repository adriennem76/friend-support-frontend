import React, {Component} from "react"
import {connect} from "react-redux"
import {login} from "../actions/userActions"
import { Button, Message } from 'semantic-ui-react'

class Login extends Component {

  state = {
    email: "",
    password: "",
    error: false,
    loading: false
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  login = (e) => {
    e.preventDefault()
    this.setState({loading: true})
    let user = {email: this.state.email, password: this.state.password}
    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {'Content-Type': 'application/json',
      'accept': 'application/json' },
      body: JSON.stringify(user)
    })
    .then(resp => resp.json())
    .then(data => {
      if (data.id) {
        this.props.history.push('/my-profile')
        return this.props.login(data)
      } else {
        this.setState({error: true, loading: false})
      }
    })
    
  }

  render() {
    return (
      <div >
      
      <h3 className="ui teal center aligned header">Log-In</h3>
      <form onSubmit={this.login} class="ui large form">
        <div className="ui stacked segment">
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
            type="password" name="password" 
            value={this.state.password} 
            onChange={this.handleChange}/>
            </label>
        </div>

        <Button type="submit" className={this.state.loading? "ui loading teal large fluid  button" : "ui teal large fluid button"}>Submit</Button>
        
        </div>
        </form>
        {this.state.error ? (<Message error
        header="Error"
        content="Incorrect email or password."/>) : null}
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {login: returnUser => dispatch(login(returnUser))}
}

export default connect (
  null, mapDispatchToProps
)(Login)