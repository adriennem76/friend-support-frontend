import React, {Component} from "react"
import {connect} from "react-redux"
import {getData} from "../../actions/userActions"

export class UserList extends Component {
  
  componentDidMount(){
    this.props.getData()
  }

  render(){
    return (
      <div>
      <ul>
        {this.props.users.map(user => (
          <li key={"user"+user.id}>
            {user.name}
          </li>
        ))}
      </ul>
      {this.props.currentUser.name}
      </div>
    )
  }

}

const mapStateToProps = state => {
  return {users: state.users, currentUser: state.currentUser}
}

export default connect (
  mapStateToProps,
  {getData}
)(UserList)