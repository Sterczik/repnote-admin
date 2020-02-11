import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { ServiceContactMessages } from '../../services/contactMessages/contactMessages'

class ContactMessagePage extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      message: {}
    }
  }

  componentDidMount() {
    ServiceContactMessages.getContactMessage(this.props.match.params.id)
      .then(data => {
        this.setState({
          message: data.data
        })
      })
  }

  remove(id) {
    ServiceContactMessages.removeContactMessage(id)
      .then(() => {
        this.props.history.push('/admin/contactMessages')
      })
  }

  render() {
    return (
      <>
        <div>ContactMessagePage</div>

        { this.state.message.id ? (
          <div>
            From: <p>{ this.state.message.name } ({ this.state.message.email })</p>
            <span>{ this.state.message.message }</span>

            <button onClick={() => this.remove(this.state.message.id)}>Remove</button>
          </div>
        ) : (
          <div>No contact message</div>
        ) }
        
        <Link to="/admin/contactMessages">Back</Link>
      </>
    )
  }
}

export default ContactMessagePage