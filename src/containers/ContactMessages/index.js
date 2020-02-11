import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { ServiceContactMessages } from '../../services/contactMessages/contactMessages'

class ContactMessagesPage extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      messages: []
    }
  }

  componentDidMount() {
    ServiceContactMessages.getContactMessages()
      .then(data => {
        this.setState({
          messages: data.data
        })
      })
  }

  render() {
    return (
      <>
        <div>ContactMessagesPage</div>
        
        { this.state.messages.length === 0 ? (
          <div>No Contact Messages</div>
        ) : (
          this.state.messages.map((message, index) => (
            <div key={index}>
              From: <p>{ message.name } ({ message.email })</p>
              <Link to={'/admin/contactMessages/' + message.id}>Go</Link>
              <hr />
            </div>
          ))
        )}
      </>
    )
  }
}

export default ContactMessagesPage