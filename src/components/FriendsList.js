import React, {Component} from "react"
import {connect} from "react-redux"
import {Link} from 'react-router-dom'
import {List, Dimmer, Loader} from  'semantic-ui-react'

class FriendsList extends Component {

  render() {
    return (
      <div className="ui container mainPage">
          {this.props.friends ? (<List relaxed divided verticalAlign='middle'>
            {this.props.friends.map(friend => 
              <List.Item>
                <List.Header>
                <Link to={`/profiles/${friend.id}`}>
                {friend.name}
                </Link>
                </List.Header>
              </List.Item>
            )}
            </List>) : (<Dimmer active><Loader/></Dimmer>)}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {friends: state.currentUser.friends}
}

export default connect (
  mapStateToProps
)(FriendsList)
