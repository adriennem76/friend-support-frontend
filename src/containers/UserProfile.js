import React, {Component} from "react"
import {connect} from "react-redux"
import SupportItem from "../components/SupportItem"
import SupportForm from "../components/SupportForm"
import {acceptFriend, declineFriend} from "../actions/userActions"

class UserProfile extends Component {

  state = {
    clicked: false,
    edit: false,
    item: {}
  }

  clicked = () => {
    this.setState({clicked: !this.state.clicked})
  }

  accept = (e,id) => {
    let request = this.props.currentUser.requests_received.find(request => request.user_id === id)
    fetch(`http://localhost:3000/friend_requests/${request.id}`, {
      method: 'PATCH',
      headers:{'Content-Type': 'application/json'},
      body: JSON.stringify({id: request.id})
    })
    .then(resp => resp.json())
    .then(data => this.props.acceptFriend(data))
  }
  decline = (e, id) =>{
    let request = this.props.currentUser.requests_received.find(request => request.user_id === id)
    fetch(`http://localhost:3000/friend_requests/${request.id}`, {
      method: 'DELETE',
      headers:{'Content-Type': 'application/json'},
    })
    .then(console.log(id))
    .then(this.props.declineFriend(id))
  }

  edit = (e, item) => {
    this.setState({edit: !this.state.edit, item: item})
  }

  render() {
    return(
      <div>
        {this.state.edit ? <SupportForm edit={this.edit} item={this.state.item}/> : this.state.clicked ? <SupportForm clicked={this.clicked}/> : (<div>
          {this.props.currentUser.name}
        <br/>
        <button onClick={this.clicked}>New Support Item</button>
        <br/>
        <h3>My Support Items:</h3>
        {this.props.currentUser.support_items ? 
        (<div> 
        <ul>
          {this.props.currentUser.support_items.map(item => <li><SupportItem item={item} edit={this.edit} /></li>)}
        </ul></div>) : (<div>Loading</div>)}
        <h3>Friend Requests</h3>
        {this.props.currentUser.requested_friends ?
        (<div>
          <ul>
            {this.props.currentUser.requested_friends.map(friend => <li>{friend.name} <button onClick={(e) => {this.accept(e,friend.id)}}>Accept</button><button onClick={(e) => {this.decline(e,friend.id)}}>Decline</button></li>)}
          </ul>
          </div>) :
          (null)
        }
        </div>)}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {currentUser: state.currentUser}
}

const mapDispatchToProps = (dispatch) => {
  return {acceptFriend: friend => dispatch(acceptFriend(friend)),
  declineFriend: friend => dispatch(declineFriend(friend))}
}

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(UserProfile)