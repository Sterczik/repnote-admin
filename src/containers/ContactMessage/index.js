import React, { Component } from 'react'
import { Alert } from 'reactstrap'
import { Link } from 'react-router-dom'
import { ServiceContactMessages } from '../../services/contactMessages/contactMessages'

class ContactMessagePage extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      message: {},
      error: {}
    }
  }

  componentDidMount() {
    ServiceContactMessages.getContactMessage(this.props.match.params.id)
      .then(data => {
        this.setState({
          message: data.data
        })
      })
      .catch((error) => {
        this.setState({
          error: error.response.data
        })
      })
  }

  remove(id) {
    ServiceContactMessages.removeContactMessage(id)
      .then(() => {
        this.props.history.push('/admin/contactMessages')
      })
      .catch((error) => {
        this.setState({
          error: error.response.data
        })
      })
  }

  render() {
    return (
      <>
        <div>ContactMessage Page</div>

        { this.state.error && this.state.error.status === 'error' ? (
          <Alert color="danger">
            <span><strong>Code: </strong>{ this.state.error.err.code } | </span>
            <span><strong>Detail: </strong>{ this.state.error.err.detail } | </span>
            <span><strong>Table: </strong>{ this.state.error.err.table } | </span>
            <span><strong>Constraint: </strong>{ this.state.error.err.constraint } | </span>
          </Alert>
        ) : null }

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