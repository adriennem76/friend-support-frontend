import React, {Component} from 'react'
import {connect} from "react-redux"
import {deleteSupportItem} from "../actions/userActions"
import {Button, Card} from  'semantic-ui-react'

class SupportItem extends Component {

  delete = () => {
    const id = this.props.item.id
    fetch(`http://localhost:3000/support_items/${id}`, {
      method: 'DELETE',
      headers:{'Content-Type': 'application/json'}
    })
    .then(this.props.deleteSupportItem(id))
  }

  render() {

    const item = this.props.item
    return (
      <Card>
        <div className="content cardContent">
        <span className="cardTitle">Category:</span> {item.category}<br/>
        </div>
        <div className="content cardContent">
        <span className="cardTitle">I can offer:</span> {item.description}<br/>
        <span className="cardTitle">This often:</span> {item.frequency_num} time(s) per {item.frequency_period}
        </div>
        {this.props.currentUser.id === item.user_id ?
        (<Card.Content extra><Button basic color='green' onClick={(e) => this.props.edit(e, item)}>Edit</Button><Button basic color='red' onClick={this.delete}>Delete</Button></Card.Content>) : (null)}
      </Card>
    )
  }
}

const mapStateToProps = state => {
  return {currentUser: state.currentUser}
}

const mapDispatchToProps = (dispatch) => {
  return {deleteSupportItem: supportItem => dispatch(deleteSupportItem(supportItem))}
}

export default connect (
  mapStateToProps, mapDispatchToProps
)(SupportItem)