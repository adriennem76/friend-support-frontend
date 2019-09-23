import React, {Component} from "react"
import SupportItem from "../components/SupportItem"

export default class FriendProfile extends Component {

    state={
      friend: {}
    }

  componentDidMount() {
    fetch(`http://localhost:3000/users/${this.props.id}`)
    .then(resp => resp.json())
    .then(data => this.setState({friend: data}))
  }

  render() {
    const friend = this.state.friend
    return(
      <div>
        {friend.support_items ? 
        (<div> 
        {friend.name}
        <br/>
        <h3>{friend.name}'s Support Items:</h3>
        <ul>
          {friend.support_items.map(item => <li><SupportItem item={item}/></li>)}
        </ul></div>) : (<div>Loading</div>)}
      </div>
    )
  }
}




