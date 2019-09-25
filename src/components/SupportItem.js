import React, {Component} from 'react'
import {connect} from "react-redux"
import {deleteSupportItem} from "../actions/userActions"

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
      <div>
        <br/>
        Category: {item.category}<br/>
        I can offer: {item.description}<br/>
        This often: {item.frequency_num} time(s) per {item.frequency_period}
        <button onClick={(e) => this.props.edit(e, item)}>Edit</button><button onClick={this.delete}>Delete</button>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {deleteSupportItem: supportItem => dispatch(deleteSupportItem(supportItem))}
}

export default connect (
  null, mapDispatchToProps
)(SupportItem)