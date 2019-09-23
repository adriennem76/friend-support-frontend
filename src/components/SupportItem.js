import React, {Component} from 'react'

export default class SupportItem extends Component {
  render() {

    const item = this.props.item
    return (
      <div>
        Category: {item.category}<br/>
        I can offer: {item.description}<br/>
        This often: {item.frequency_num} time(s) per {item.frequency_period}
      </div>
    )
  }
}