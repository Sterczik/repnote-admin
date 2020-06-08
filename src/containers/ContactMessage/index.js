import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import {
  Button
} from 'reactstrap'

import {
  getContactMessage,
  removeContactMessage
} from 'store/global/actions'
import CustomAlert from 'components/Alert/CustomAlert'

class ContactMessagePage extends Component {
  componentDidMount() {
    this.props.getContactMessage(this.props.match.params.id)
  }

  remove(id) {
    this.props.removeContactMessage(id)
  }

  render() {
    return (
      <div className="px-4 py-3">
        <CustomAlert
          error={this.props.error}
        />
        { this.props.contactMessage.id ? (
          <>
            <h4 className="display-4 mb-4">{ this.props.contactMessage.id }</h4>
            <div className="mb-3">
              <p className="mb-0"><b>From: </b>{this.props.contactMessage.name}</p>
              <p className="mb-0"><b>Email: </b>{this.props.contactMessage.email}</p>
              <p className="mb-0"><b>Message: </b>{this.props.contactMessage.message}</p>
            </div>
            <Button
              color="primary"
              onClick={() => this.remove(this.props.contactMessage.id)}
              size="sm"
            >
              Remove
            </Button>
          </>
        ) : (
          <h4 className="display-4 mb-4">Loading</h4>
        ) }
        <Button
          color="info"
          to="/admin/contactMessages"
          tag={Link}
          size="sm"
        >
          Back
        </Button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  contactMessage: state.global.contactMessage,
  error: state.global.error
})

const mapDispatchToProps = (dispatch) => ({
  getContactMessage: (id) => dispatch(getContactMessage(id)),
  removeContactMessage: (id) => dispatch(removeContactMessage(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(ContactMessagePage)