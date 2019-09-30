import React, {Component} from "react"
import {connect} from "react-redux"
import {login} from "../actions/userActions"

class Login extends Component {

  state = {
    email: "",
    password: ""
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  login = (e) => {
    e.preventDefault()
    
    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {'Content-Type': 'application/json',
      'accept': 'application/json' },
      body: JSON.stringify(this.state)
    })
    .then(resp => resp.json())
    .then(data => this.props.login(data))
    .then(this.props.history.push('/my-profile'))
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
  return {login: returnUser => dispatch(login(returnUser))}
}

export default connect (
  null, mapDispatchToProps
)(Login)