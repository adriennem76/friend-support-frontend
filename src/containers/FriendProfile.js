import React, {Component} from "react"
import SupportItem from "../components/SupportItem"
import {Card} from  'semantic-ui-react'

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
      <div className="ui container mainPage">
        {friend.support_items ? 
        (<div> 
          <h2 className="ui dividing header">{friend.name}</h2>
        <br/>
        <h3>{friend.name}'s Support Items:</h3>
        <Card.Group centered>
          {friend.support_items.map(item => <Card><SupportItem item={item}/></Card>)}
        </Card.Group></div>) : (<div>Loading</div>)}
      </div>
    )
  }
}




