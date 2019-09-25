import React, {Component} from 'react'

export default class SupportItem extends Component {

  render() {

    const item = this.props.item
    return (
      <div>
        <br/>
        Category: {item.category}<br/>
        I can offer: {item.description}<br/>
        This often: {item.frequency_num} time(s) per {item.frequency_period}
        <button onClick={(e) => this.props.edit(e, item)}>Edit</button><button onClick={this.props.delete}>Delete</button>
      </div>
    )
  }
}