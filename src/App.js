import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, BrowserRouter as Router} from "react-router-dom"
import UserList from "./components/users/userList"
import UserProfile from "./containers/UserProfile"
import Navbar from "./components/Navbar"
import Login from "./components/Login"
import FriendsList from "./components/FriendsList"
import FriendProfile from "./containers/FriendProfile"
import {getData} from "./actions/userActions"
import {connect} from "react-redux"
import FriendSearch from './components/FriendSearch';
import HomePage from "./containers/HomePage"
import LogOut from "./components/LogOut"

class App extends React.Component {

  componentDidMount(){
    this.props.getData()
  }

  render() {
    return (
      <div className="App">
        <Router>
        <Navbar />
        <Route exact path="/" component={HomePage}/>
        <Route path="/my-profile" component={UserProfile}/>
        <Route path="/profiles/:id" render= {(routerProps) => <FriendProfile id={routerProps.match.params.id}/>}/>
        <Route path="/login" component={HomePage}/>
        <Route path="/logout" component={LogOut}/>
        <Route path="/friends" component={FriendsList}/>
        <Route path="/friend-search" component={FriendSearch} />
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
