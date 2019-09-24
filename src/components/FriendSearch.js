import React, {Component} from "react"
import {connect} from "react-redux"

class FriendSearch extends Component {

  state = {
    search: "",
    users: [],
    pending: []
  }

  submitHandler = (e) => {
    e.preventDefault()
    this.setState({pending: this.props.currentUser.pending_friends})
    let foundUsers = this.props.users.filter(user => user.email.includes(this.state.search))
    this.setState({users: foundUsers})
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  addFriend = (id) => {
    let request = {user_id: this.props.currentUser.id, friend_id: id}
    fetch("http://localhost:3000/friend_requests", {
      method: "POST",
      headers: {'Content-Type': 'application/json' },
      body: JSON.stringify(request)
    })
    .then(resp => resp.json())
    .then(data => this.setState({search: "", pending: [...this.state.pending, data]} ))
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
          {this.state.users.map(user => {
          return ( 
            <li>{user.name}
            {this.state.pending.some(userObj => userObj.email === user.email) ? (<div>Friend Request Sent</div>) : 
            this.props.currentUser.friends.some(userObj => userObj.email === user.email) ? (<div>Friend</div>) : 
            (<button onClick={() => this.addFriend(user.id)}>Add Friend</button>)}
            </li>)})}
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