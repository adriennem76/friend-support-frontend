import React, {Component} from "react"
import {connect} from "react-redux"

class FriendsList extends Component {

  render() {
    return (
      <div>
        <ul>
          {this.props.friends ? (<div>
            {this.props.friends.map(friend => 
              <li>{friend.name}</li>
            )}
            </div>) : (<div>Loading</div>)}
          </ul>
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
