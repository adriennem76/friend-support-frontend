import React, {Component} from "react"
import {connect} from "react-redux"

class FriendSearch extends Component {
  
  state = {
    search: "",
    users: []
  }

  submitHandler = (e) => {
    e.preventDefault()
    let foundUsers = this.props.users.filter(user => user.email.includes(this.state.search))
    this.setState({users: foundUsers})
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  render() {
    return (
      <div>
      <form onSubmit={this.submitHandler}>
        <input type="text" name="search" placeholder="email"  value={this.state.search} 
        onChange={this.handleChange}/>
        <input type="submit" value="Submit" />
      </form>
      <hr/>
      {this.state.users.length > 0 ? 
        (<div>
          <ul>
          {this.state.users.map(user => <li>{user.name} <button>Add Friend</button></li>)}
          </ul>
        </div>) :
        (null)
        }
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {users: state.users, currentUser: state.currentUser}
}

export default connect (
  mapStateToProps
)(FriendSearch)