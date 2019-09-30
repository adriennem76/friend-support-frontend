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
      <div style={{'height' : '100vh'}}className="ui center aligned middle aligned grid">
      <div style={{'max-width' : '450px'}} className="column">
        {this.state.login ? <Login history={this.props.history}/> : <SignUp history={this.props.history}/>}
        <div className="ui message" style={{'max-width' : '450px'}} >
        <button onClick={this.clicked}>{this.state.login ? "Sign-Up" : "Login"}</button>
        </div> 
      </div>
      </div>
    )
  }
}