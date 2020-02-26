import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {
  Row,
  Col,
  Button
} from 'reactstrap'
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
      <div className="px-4 py-3">
        <h4 className="display-4 mb-4">RepNote Contact Messages</h4>
        { this.state.messages.length === 0 ? (
          <p>No contact messages</p>
        ) : (
          this.state.messages.map((message, index) => (
            <div key={index} className="border-bottom pb-3 mb-3">
              <Row>
                <Col sm="12" lg="4">
                  <span>From: {message.name}</span>
                </Col>
                <Col sm="12" lg="4">
                  <span>Email: {message.email}</span>
                </Col>
                <Col sm="12" lg="4">
                  <Button
                    color="primary"
                    to={'/admin/contactMessages/' + message.id}
                    tag={Link}
                    size="sm"
                  >
                    Details
                  </Button>
                </Col>
              </Row>
            </div>
          ))
        )}
      </div>
    )
  }
}

export default ContactMessagesPage