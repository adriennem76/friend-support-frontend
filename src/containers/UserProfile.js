import React, {Component} from "react"
import {connect} from "react-redux"
import SupportItem from "../components/SupportItem"
import SupportForm from "../components/SupportForm"
import {acceptFriend, declineFriend} from "../actions/userActions"
import {Button, Card} from  'semantic-ui-react'

class UserProfile extends Component {

  state = {
    clicked: false,
    edit: false,
    item: {},
    loading: false
  }

  clicked = () => {
    this.setState({clicked: !this.state.clicked})
  }

  accept = (e,id) => {
    e.target.className = "ui loading green basic button"
    // console.dir(e.target)
    let request = this.props.currentUser.requests_received.find(request => request.user_id === id)
    fetch(`http://localhost:3000/friend_requests/${request.id}`, {
      method: 'PATCH',
      headers:{'Content-Type': 'application/json'},
      body: JSON.stringify({id: request.id})
    })
    .then(resp => resp.json())
    .then(data => this.props.acceptFriend(data))
    // .then(this.setState({loading: true}))
    // .then(this.completed(e))
  }

  // completed = (e) => {
  //   e.target.className = "ui green basic button"
  // }

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
      <div className="ui container mainPage">
        {this.state.edit ? <SupportForm edit={this.edit} item={this.state.item}/> : this.state.clicked ? <SupportForm clicked={this.clicked}/> : (<div>
          <h2 className="ui dividing header">{this.props.currentUser.name}</h2>
        <br/>
        <Button onClick={this.clicked}>New Support Item</Button>
        <br/>
        <h3>My Support Items:</h3>
        <br/>
        {this.props.currentUser.support_items ? 
        (<div className="ui three cards"> 
        <Card.Group centered>
          {this.props.currentUser.support_items.map(item => <SupportItem item={item} edit={this.edit} />)}
        </Card.Group></div>) : (<div>Loading</div>)}
        <h3>Friend Requests:</h3>
        {this.props.currentUser.requested_friends ?
        (<div>
          <Card.Group centered>
            {this.props.currentUser.requested_friends.map(friend => <Card><Card.Content header={friend.name}/><Card.Content extra><Button basic color='green' onClick={(e) => {this.accept(e,friend.id)}} >Accept</Button><Button basic color='red' onClick={(e) => {this.decline(e,friend.id)}}>Decline</Button></Card.Content></Card>)}
          </Card.Group>
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
