import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, BrowserRouter as Router} from "react-router-dom"
import UserList from "./components/users/userList"
import UserProfile from "./containers/UserProfile"
import Navbar from "./components/Navbar"
import Login from "./components/Login"
import FriendsList from "./components/FriendsList"
import {getData} from "./actions/userActions"
import {connect} from "react-redux"

class App extends React.Component {

  componentDidMount(){
    this.props.getData()
  }

  render() {
    return (
      <div className="App">
        <Router>
        <Navbar />
        <Route path="/profile" component={UserProfile}/>
        <Route path="/login" component={Login}/>
        <Route path="/friends" component={FriendsList}/>
        {/* <UserList /> */}
        </Router>
      </div>
    );
  }

}

const mapStateToProps = state => {
  return {currentUser: state.currentUser}
}

export default connect (
  mapStateToProps,
  {getData}
)(App)
