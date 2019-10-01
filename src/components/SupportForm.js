import React from 'react'
import {connect} from "react-redux"
import {withRouter} from 'react-router-dom'
import {addSupportItem, editSupportItem} from "../actions/userActions"
import { Button, Checkbox, Form } from 'semantic-ui-react'

class SupportForm extends React.Component {
  
  state={
    category: "",
    description: "",
    frequency_num: 0,
    frequency_period: "",
    user_id: this.props.currentUser.id
  }

  componentDidMount() {
    if (this.props.item) {
      const item = this.props.item
      this.setState({category: item.category, description: item.description, frequency_num: item.frequency_num, frequency_period: item.frequency_period, id: item.id})
    }
  }

  handleChange = (e) => {
    if (e.target.name === "frequency_num" && e.target.value){
      this.setState({frequency_num: parseInt(e.target.value)})
    } else {
      this.setState({[e.target.name]: e.target.value})
    }
  }

  createSupportItem = (e) => {
    e.preventDefault()
    
    fetch("http://localhost:3000/support_items", {
      method: "POST",
      headers: {'Content-Type': 'application/json' },
      body: JSON.stringify(this.state)
    })
    .then(resp => resp.json())
    .then(data => this.props.addSupportItem(data))
    .then(this.props.clicked)
  
  }

  editSupportItem = (e) => {
    e.preventDefault()

    fetch(`http://localhost:3000/support_items/${this.state.id}`, {
      method: "PATCH",
      headers: {'Content-Type': 'application/json' },
      body: JSON.stringify(this.state)
    })
    .then(resp => resp.json())
    .then(data => this.props.editSupportItem(data))
    .then(this.props.edit)
  }

  render(){

    return (
      
    <div>
      {console.log(this.state)}
      <h3>New Support Item</h3>
      <Form onSubmit={this.props.item ? this.editSupportItem : this.createSupportItem}>

        <Form.Field>
          <label>
            <input 
            placeholder="Category" 
            type="text" 
            name="category" 
            value={this.state.category} 
            onChange={this.handleChange}/>
            </label>
        </Form.Field>

        <Form.Field>
          <label>
            <textarea 
            placeholder="Support Description" 
            type="text" name="description" 
            value={this.state.description} 
            onChange={this.handleChange}/>
            </label>
        </Form.Field>

        <Form.Field>
          <label>
            <input 
            placeholder = '0' 
            type="text" 
            name="frequency_num" 
            value={(this.state.frequency_num)} 
            onChange={this.handleChange}/>
            </label>
        </Form.Field>

        <Form.Field>
          <label>
            <input 
            placeholder="week" 
            type="text" 
            name="frequency_period" 
            value={this.state.frequency_period}
            onChange={this.handleChange} />
            </label>
        </Form.Field>

          <Button type="submit" value="Submit">Submit</Button>
        </Form>
        <Button onClick={this.props.clicked}>Close</Button>
      </div>)
  }
}

const mapStateToProps = state => {
  return {currentUser: state.currentUser}
}

const mapDispatchToProps = (dispatch) => {
  return {addSupportItem: supportItem => dispatch(addSupportItem(supportItem)),
  editSupportItem: supportItem => dispatch(editSupportItem(supportItem))}
}

export default connect (
  mapStateToProps, mapDispatchToProps
)(SupportForm)