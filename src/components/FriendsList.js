import React, {Component} from "react"
import {connect} from "react-redux"
import {Link} from 'react-router-dom'

class FriendsList extends Component {

  render() {
    return (
      <div className="ui container mainPage">
        <ul>
          {this.props.friends ? (<div>
            {this.props.friends.map(friend => 
              <li><Link to={`/profiles/${friend.id}`}>
              {friend.name}
              </Link></li>
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
