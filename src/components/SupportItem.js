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
      <div className="card">
        <div className="content">
        Category: {item.category}<br/>
        </div>
        <div className="content">
        I can offer: {item.description}<br/>
        This often: {item.frequency_num} time(s) per {item.frequency_period}
        {this.props.currentUser.id === item.user_id ?
        (<div><button onClick={(e) => this.props.edit(e, item)}>Edit</button><button onClick={this.delete}>Delete</button></div>) : (null)}
        </div>
      </div>
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