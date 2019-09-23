import React, {Component} from "react"
import {connect} from "react-redux"
import SupportItem from "../components/SupportItem"
import SupportForm from "../components/SupportForm"

class UserProfile extends Component {

  state = {
    clicked: false
  }

  clicked = () => {
    this.setState({clicked: !this.state.clicked})
  }

  render() {
    return(
      <div>
        {this.state.clicked ? <SupportForm clicked={this.clicked}/> : (<div>
          {this.props.currentUser.name}
        <br/>
        <button onClick={this.clicked}>New Support Item</button>
        <br/>
        <h3>My Support Items:</h3>
        {this.props.currentUser.support_items ? 
        (<div> 
        <ul>
          {this.props.currentUser.support_items.map(item => <li><SupportItem item={item}/></li>)}
        </ul></div>) : (<div>Loading</div>)}
        </div>)}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {currentUser: state.currentUser}
}


export default connect (
  mapStateToProps
)(UserProfile)