import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import {
  Row,
  Col,
  Button
} from 'reactstrap'

import {
  getContactMessages
} from 'store/global/actions'

class ContactMessagesPage extends Component {
  componentDidMount() {
    this.props.getContactMessages()
  }

  render() {
    return (
      <div className="px-4 py-3">
        <h4 className="display-4 mb-4">RepNote Contact Messages</h4>
        { this.props.contactMessages.length === 0 ? (
          <p>No contact messages</p>
        ) : (
          this.props.contactMessages.map((message, index) => (
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

const mapStateToProps = (state) => ({
  contactMessages: state.global.contactMessages
})

const mapDispatchToProps = (dispatch) => ({
  getContactMessages: () => dispatch(getContactMessages())
})

export default connect(mapStateToProps, mapDispatchToProps)(ContactMessagesPage)