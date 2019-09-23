import React, {Component} from "react"
import {connect} from "react-redux"
import SupportItem from "../components/SupportItem"

class UserProfile extends Component {


  render() {
    return(
      <div>
        {this.props.currentUser.name}
        <br/>
        <h3>My Support Items:</h3>
        {this.props.currentUser.support_items ? 
        (<div> 
        <ul>
          {this.props.currentUser.support_items.map(item => <li><SupportItem item={item}/></li>)}
        </ul></div>) : (<div>Loading</div>)}
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