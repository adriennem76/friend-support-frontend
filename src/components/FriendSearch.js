import React, {Component} from "react"
import {connect} from "react-redux"
import {sendRequest} from "../actions/userActions"
import {Grid, Button, List} from  'semantic-ui-react'

class FriendSearch extends Component {

  state = {
    search: "",
    users: [],
    // pending: [],
    noResults: false,
    loading: false
  }

  submitHandler = (e) => {
    e.preventDefault()
    // this.setState({pending: this.props.currentUser.pending_friends})
    if (this.state.search !== "") {
    let foundUsers = this.props.users.filter(user => user.email.includes(this.state.search))
    foundUsers = foundUsers.filter(user => user.email !== this.props.currentUser.email)
    if (foundUsers < 1) {
      this.setState({users: foundUsers, noResults: true})
    } else {
      this.setState({users: foundUsers, noResults: false})
    }
    } else {
      this.setState({users: [], noResults: false})
    }
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  addFriend = (id) => {
    this.setState({loading: true})
    let request = {user_id: this.props.currentUser.id, friend_id: id}
    fetch("http://localhost:3000/friend_requests", {
      method: "POST",
      headers: {'Content-Type': 'application/json' },
      body: JSON.stringify(request)
    })
    .then(resp => resp.json())
    .then(data => this.props.sendRequest(data))
    .then(this.setState({loading: false}))
  }

  render() {

    return (
      <Grid>
      <Grid.Column width={6}>
      <div className="ui category search mainPage">
      <div className="ui icon input">
      <form onSubmit={this.submitHandler}>
        <input className="prompt" type="text" name="search" placeholder="email"  value={this.state.search} 
        onChange={this.handleChange}/>
        <Button type="submit" style={{'marginLeft' : '1em'}}>Search</Button>
      </form>
      </div>
      <hr style={{'marginBottom' : '2em'}}/>
      {
      this.state.users.length > 0 ? 
        (<div>
          <List divided verticalAlign='middle'>
          {this.state.users.map(user => {
          return ( 
            <List.Item>
              <List.Content className="friendlist">
              {user.name}
            {this.props.pending.some(userObj => userObj.email === user.email) ? (<span className="friendAction">Friend Request Sent</span>) : 
            this.props.currentUser.friends.some(userObj => userObj.email === user.email) ? (<span className="friendAction">Friend</span>) : 
            (<span className="friendAction"><Button className={this.state.loading ? "loading button" : null} onClick={() => this.addFriend(user.id)} style={{'marginLeft' : '1em'}}>Add Friend</Button></span>)}
            </List.Content>
            </List.Item>)})}
          </List>
        </div>) :
        this.state.noResults ? (<div>No Results Found</div>) :
        (null)
        }
      </div>
      </Grid.Column>
      </Grid>
    )
  }
}

const mapStateToProps = state => {
  return {users: state.users, currentUser: state.currentUser, pending: state.currentUser.pending_friends}
}

const mapDispatchToProps = (dispatch) => {
  return {sendRequest: friend => dispatch(sendRequest(friend))}
}

export default connect (
  mapStateToProps, mapDispatchToProps
)(FriendSearch)