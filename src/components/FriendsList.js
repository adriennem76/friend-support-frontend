import React, {Component} from "react"
import {connect} from "react-redux"
import {Link} from 'react-router-dom'

class FriendsList extends Component {

  render() {
    return (
      <div>
        <ul>
          {this.props.friends ? (<div>
            {this.props.friends.map(friend => 
              <Link to={`/profiles/${friend.id}`}>
              {friend.name}
              </Link>
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
