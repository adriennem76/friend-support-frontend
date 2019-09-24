import React from "react"
import Login from "../components/Login"
import SignUp from "../components/SignUp"

export default class HomePage extends React.Component {

  state = {
    login: true
  }

  clicked = () => {
    this.setState({login: !this.state.login})
  }

  render() {
    return (
      <div>
        {this.state.login ? <Login/> : <SignUp history={this.props.history}/>}
        <button onClick={this.clicked}>{this.state.login ? "Sign-Up" : "Login"}</button> 
      </div>
    )
  }
}